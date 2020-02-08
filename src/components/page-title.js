import styled, { css } from "styled-components"
import { rhythm } from "../utils/typography"
import media from "../utils/media"

export default styled.h1`
    color: #FFFFFE;
    font-size: ${rhythm(1.2)};
    grid-column: 2 / 14;
    margin-bottom: ${rhythm(1)};

    ${media.phone(css`
        font-size: 1.75rem;
    `)}
`;