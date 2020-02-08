import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"


export default function BlogIndex({ location, data }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <SEO title="Olá, eu sou o Cesar." />
        <Bio />
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
  }
`
