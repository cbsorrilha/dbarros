import styled, { css } from "styled-components"
import { rhythm } from "../utils/typography"
import media from "../utils/media"


export default styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #242629;
  height: ${rhythm(3)};
  display: grid;
  grid-template-columns:
    [edge-start] minmax(1rem, 1fr) [content-start] repeat(
      12,
      minmax(1rem, 5.20833rem)
    )
    [content-end] minmax(1rem, 1fr) [edge-end];
  grid-column-gap: 0.75%;
  padding: 0;
  align-items: center;

  ${media.phone(css`
    height: 3rem;
    font-size: 10px;
    pre {
      font-size: 10px;
    }
  `)}
`
