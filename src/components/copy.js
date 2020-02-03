import React from "react"
import styled, { css } from "styled-components"
import media from "../utils/media"

const Copy = styled.div`
  grid-column: 11 / 14;
  text-align: right;
  color: #fffffe;
  ${media.phone(css`
    grid-column: 2 / 14;
    text-align: center;
  `)}
`

export default function({ year }) {
  return (
    <Copy>
      © {year}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}
      and ♥
    </Copy>
  )
}
