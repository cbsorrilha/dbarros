import React from "react"
import { useStaticQuery } from "gatsby"
import styled, { css } from "styled-components"

import { rhythm } from "../utils/typography"
import media from "../utils/media"
import GithubIcon from "../../content/assets/github.inline.svg"
import LinkedinIcon from "../../content/assets/linkedin.inline.svg"
import InstagramIcon from "../../content/assets/instagram.inline.svg"

const iconDict = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
}

const BioCard = styled.div`
  grid-column: 2 / 14;
  background-color: #242629;
  display: flex;
  margin-top: ${rhythm(2.5)};

  ${media.phone(css`
    flex-direction: column-reverse;
    margin-top: 10%;
  `)}

  > img {
    margin: 0;
    height: auto;
    max-height: ${rhythm(14.5)};
    width: 100%;
    max-width: ${rhythm(15)};
  }
`

const Description = styled.div`
  padding: ${rhythm(0.8)} ${rhythm(1)};
  flex-grow: 1;
  > p {
    margin-bottom: ${rhythm(0.3)};
    color: #94a1b2;
    font-size: ${rhythm(0.55)};
    max-width: ${rhythm(23)};
  }
  > h2 {
    color: #fffffe;
    margin: 0;
    margin-bottom: ${rhythm(1)};
  }
`

const Social = styled.div`
  display: flex;
  margin-top: ${rhythm(0.5)};
`

const SocialItem = styled.div`
  display: flex;
  > a {
    color: #2cb67d;
    text-decoration: underline;
    margin-right: ${rhythm(0.5)};
  }

  svg {
    width: ${rhythm(1)};
    path {
      fill: #2cb67d;
    }
  }
`

const Bio = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          profilePic
          social {
            github {
              username
              link
            }
            instagram {
              username
              link
            }
            linkedin {
              username
              link
            }
          }
        }
      }
    }
  `)

  const { profilePic, social } = data.site.siteMetadata

  const socialKeys = Object.keys(social)

  return (
    <BioCard>
      <Description>
        <h2>Olá, eu sou o Cesar</h2>
        <p>
          Sou desenvolvedor web desde 2013 e meu sonho é transformar a Baixada Fluminense
          (RJ) no novo Vale do Silício&#8482;.
        </p>
        <p>
          Desenvolvo no back-end com NodeJS e um pouquinho de Python, no
          front-end com React, Vue e o que mais vier e sei até um pouquinho de
          infra com docker e kubernetes.
        </p>
        <p>Também me meto escrever na internet.</p>
        <p>Quer saber mais? Fala comigo.</p>
        <Social>
          {socialKeys.map(key => {
            const Icon = iconDict[key]
            return (
              <SocialItem key={key}>
                <a href={social[key].link}>
                  <Icon
                    style={{ color: "#2cb67d" }}
                    alt={social[key].username}
                  />
                </a>
              </SocialItem>
            )
          })}
        </Social>
      </Description>
      <img src={profilePic} alt="Eu" title="Eu sou o da direita" />
    </BioCard>
  )
}

export default Bio
