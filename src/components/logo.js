import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import logo from "../../content/assets/logo.png"

const LogoLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Logo = styled.h1`
  grid-column: 2 / span 5;
  margin: 0;
  img {
    max-width: ${rhythm(2.75)};
    margin-bottom: 0;
  }
`

export default function() {
  return (
    <Logo>
      <LogoLink to={`/`}>
        <img src={logo} alt="dbarros logo" />
      </LogoLink>
    </Logo>
  )
}
