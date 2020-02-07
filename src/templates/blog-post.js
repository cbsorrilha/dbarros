import React from "react"
import { Link, graphql } from "gatsby"
import styled, { css } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import media from "../utils/media"

const Article = styled.article`
  grid-column: 2 / 14;
  
  section p {
    color: #94A1B2;
    font-size: ${rhythm(.666)};
  }
  a {
    color: #2CB67D;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    display: block;
    margin: 0 auto;
  }

  ${media.phone(css`
    h1 {
      font-size: 1.8rem;
    }
  `)}
`;

const Nav = styled.nav`
  grid-column: 2 / 14;
`;

const Date = styled.p`
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(.35)};
  color: #2CB67D;
  font-weight: bold;
  font-size: ${rhythm(.5)};
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Article>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <Date>
              {post.frontmatter.date}
            </Date>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </Article>

        <Nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
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
}

export default BlogPostTemplate

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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
