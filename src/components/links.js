import styled from "styled-components";
import { rhythm } from "../utils/typography"


export default styled.nav`
    grid-column: 13 / 14;
    display: flex;
    flex-direction: row-reverse;
    > a {
        margin-left: ${rhythm(1)}
    }
`;