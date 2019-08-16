import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Colors from '../constants/Colors'

export default () => {
  const data = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            author
            description
            icon
          }
        }
      }
    `
  )

  const styles = {
    container: css({
      padding: '2rem',
      height: '20rem',
      width: '100%',
      backgroundColor: Colors.bubbles
    }),
    icon: css({
      borderRadius: '130px'
    }),
    wave: css({
      fill: Colors.bubbles,
      width: '100%',
      height: '6rem'
    })
  }

  const wave = css`
    fill: ${Colors.bubbles};
    width: 100%;
    height: 6rem;
  `

  return (
    <header>
      <div css={styles.container}>
        <h1>
          {data.site.siteMetadata.author}
        </h1>
        {data.site.siteMetadata.description}
        <img css={styles.icon} src={data.site.siteMetadata.icon} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
           css={wave}
           viewBox="0 0 54 14"
           preserveAspectRatio="none"
           aria-hidden="true"
           focusable="false">
        <path d="M 27 10.2878 C 20.3523 12.1439 13.3523 13.4963 0 13.4963 L 0 0 L 54 0 L 54 3.28785 C 40.6477 3.28785 33.6477 8.43177 27 10.2878 Z">
        </path>
      </svg>
    </header>
  )
}
