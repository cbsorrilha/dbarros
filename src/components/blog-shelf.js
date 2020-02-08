import styled, { css } from "styled-components"
import media from "../utils/media"
import { rhythm } from "../utils/typography"


export default styled.div`
    grid-column: 2/14;
    display: grid;
    grid-template-columns: repeat(4, minmax(260px, 25%));
    grid-column-gap: ${rhythm(1)};
    grid-row-gap: ${rhythm(1.2)};

    ${media.phone(css`
        grid-template-columns: 100%;
    `)}
`;