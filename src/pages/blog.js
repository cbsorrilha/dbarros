import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogShelf from '../components/blog-shelf';
import PageTitle from '../components/page-title';
import BlogPost from '../components/blog-post';
import placeholderImage from '../../content/assets/placeholder.png';
import { FirebaseContext } from "gatsby-plugin-firebase"

export default function Blog({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (!firebase) {
      console.error('firebase not found')
      return
    }
    
    firebase
      .analytics()
      .logEvent("visited_blog")
  }, [firebase])

  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="Todos os posts" />
        <PageTitle>Todos os posts</PageTitle>
        <BlogShelf>
          {
            posts.map(({ node }) => (
              <BlogPost
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title || node.fields.slug}
                date={node.frontmatter.date}
                image={node.frontmatter.featuredImage || placeholderImage}
                description={node.frontmatter.description || node.excerpt} />
            ))
          }
        </BlogShelf>
      </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
            title
            description
            featuredImage
          }
        }
      }
    }
  }
`
