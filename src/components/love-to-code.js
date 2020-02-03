import React from "react"
import styled, { css } from "styled-components"
import media from "../utils/media"

const Pink = styled.span`
  color: #ff79c6;
`
const Orange = styled.span`
  color: #ffb86c;
`
const Purple = styled.span`
  color: #bd93f9;
`
const White = styled.span`
  color: #f8f8f2;
`
const Green = styled.span`
  color: #50fa7b;
`

const LoveToCode = styled.div`
  grid-column: 2 / span 5;
  > pre {
    margin: 0;
  }
  ${media.phone(css`
    grid-column: 2 / 14;
    text-align: center;
  `)}
`

export default function() {
  return (
    <LoveToCode>
      <pre>
        <Pink>if</Pink>
        <Orange>(</Orange>
        <Purple>true</Purple>
        <Orange>)</Orange>
        <White>{"{"}</White> <Green>loveToCode</Green>
        <Orange>(</Orange>
        <Orange>)</Orange>
        <White>;</White> <White>{"}"}</White>
      </pre>
    </LoveToCode>
  )
}
