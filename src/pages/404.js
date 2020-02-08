import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Não encontrado</h1>
        <p>Hmmm... Acho que você não deveria estar aqui.</p>
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
