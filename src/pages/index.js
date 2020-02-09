import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { FirebaseContext } from "gatsby-plugin-firebase"


export default function BlogIndex({ location, data }) {
  const siteTitle = data.site.siteMetadata.title
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (!firebase) {
      console.error('firebase not found')
      return
    }
    
    firebase
      .analytics()
      .logEvent("visited_index")
  }, [firebase])

  return (
    <Layout location={location} title={siteTitle}>
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
