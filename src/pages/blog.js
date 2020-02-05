import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogShelf from '../components/blog-shelf';
import PageTitle from '../components/page-title';
import BlogPost from '../components/blog-post';
import placeholderImage from '../../content/assets/placeholder.png';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
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
}

export default BlogIndex

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
            date(formatString: "DD/MM/YYYY")
            title
            description
            featuredImage
          }
        }
      }
    }
  }
`
