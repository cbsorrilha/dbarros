import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import Logo from "./logo"
import Footer from "./footer"
import LoveToCode from "./love-to-code"
import Copy from "./copy"
import Links from "./links"
import Main from "./main"
import { rhythm } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #16161A;
    padding-bottom: ${rhythm(4)};
    color: #FFFFFE;
  }
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <GlobalStyle />
        <Header>
          <Logo />
          <Links>
            <Link activeClassName="active" to="/blog">
              Blog
            </Link>
            <Link activeClassName="active" to="/">
              Sobre
            </Link>
          </Links>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <LoveToCode />
          <Copy year={new Date().getFullYear()} />
        </Footer>
      </>
    )
  }
}

export default Layout
