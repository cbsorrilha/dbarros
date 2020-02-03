import styled from 'styled-components'
import { rhythm } from "../utils/typography"

export default styled.header`
    display: grid;
    grid-template-columns: [edge-start] minmax(1rem, 1fr) [content-start] repeat(12, minmax(1rem, 5.20833rem)) [content-end] minmax(1rem, 1fr) [edge-end];
    grid-column-gap: 0.75%;
    padding: 0;
    align-items: center;
    padding-top: ${rhythm(1)};
`;
