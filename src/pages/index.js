import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JumboTitle from "../components/jumbo-title"
import Bio from "../components/bio"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <SEO title="Olá, eu sou o Cesar." />
        <JumboTitle>Olá, eu sou o Cesar.</JumboTitle>
        <Bio />
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
  }
`
