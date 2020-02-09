import React, {useContext, useEffect} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { FirebaseContext } from "gatsby-plugin-firebase"

const NotFoundTitle = styled.h1`
  grid-column: 2 / 14;
  text-align: center;
  font-size: ${rhythm(1.5)};
`;

const NotFoundParagraph = styled.p`
  grid-column: 2 / 14;
  text-align: center;
  font-size: ${rhythm(.75)};
`;

export default function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (!firebase) {
      console.error('firebase not found')
      return
    }
    
    firebase
      .analytics()
      .logEvent("visited_404")
  }, [firebase])


  return (
    <Layout location={location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <NotFoundTitle>Não encontrado</NotFoundTitle>
        <NotFoundParagraph>Hmmm... Acho que você não deveria estar aqui.</NotFoundParagraph>
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
