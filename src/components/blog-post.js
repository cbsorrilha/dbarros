import React from 'react'
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import media from "../utils/media"


const PostCardImageWrapper = styled.div`
  overflow: hidden;
  max-height: ${rhythm(6.45)};
`

const PostCard = styled.article`
  max-width: ${rhythm(10)};
  > ${PostCardImageWrapper} img {
    max-width: ${rhythm(10)};
    height: auto;
    margin-bottom: 0;
    ${media.phone(css`
      max-width: 100%;
    `)}
  }

  ${media.phone(css`
    max-width: 100%;
  `)}
`

const PostCardContent = styled.div`
  padding: ${rhythm(.5)};
  background-color: #242629;
  height: ${rhythm(9.5)};
  h3 {
    margin: 0;
    font-size: ${rhythm(.72)};
  }
  small {
    color: #2CB67D;
    font-weight: bold;
  }
  p {
    color: #94A1B2;
    margin-top: ${rhythm(.3)};
  }
`



export default function ({ key, slug, date, description, image, title }) {
    return (
      <PostCard key={key}>
        <Link style={{ boxShadow: `none` }} to={slug}>
          <PostCardImageWrapper>
            <img src={image} alt="description" />
          </PostCardImageWrapper>
          <PostCardContent>
            <header>
              <h3>
                  
                    {title}
                  
              </h3>
              <small>{date}</small>
            </header>
            <section>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </section>
          </PostCardContent>
        </Link>
      </PostCard>
    )
}
