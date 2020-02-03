import styled from "styled-components"

export default styled.main`
  display: grid;
  grid-template-columns:
    [edge-start] minmax(1rem, 1fr) [content-start] repeat(
      12,
      minmax(1rem, 5.20833rem)
    )
    [content-end] minmax(1rem, 1fr) [edge-end];
  grid-column-gap: 0.75%;
  padding: 0;
`
