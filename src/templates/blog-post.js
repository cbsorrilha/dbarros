import React, { useEffect, useContext } from "react"
import { Link, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { FirebaseContext } from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import media from "../utils/media"

const Article = styled.article`
  grid-column: 2 / 14;

  section p {
    color: #94a1b2;
    font-size: ${rhythm(0.666)};
  }
  a {
    color: #2cb67d;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    display: block;
    margin: 0 auto;
  }

  hr {
    margin-bottom: ${rhythm(1)};
  }

  ${media.phone(css`
    h1 {
      font-size: 1.8rem;
    }
  `)}
`

const Nav = styled.nav`
  grid-column: 2 / 14;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`

const Date = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(0.35)};
  color: #2cb67d;
  font-weight: bold;
  font-size: ${rhythm(0.5)};
`

export default function BlogPostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (!firebase) {
      console.error("firebase not found")
      return
    }

    firebase.analytics().logEvent(`visited_${post.frontmatter.title}`)
  }, [firebase])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </Article>

      <Nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Nav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
        description
      }
    }
  }
`
