import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Social from './social'
import Colors from '../constants/Colors'
import { rhythm } from '../utils/typography'

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
    header: css({
    }),
    container: css({
      display: 'flex',
      height: rhythm(14),
      backgroundColor: Colors.bubbles,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center'
    }),
    icon: css({
      display:'block',
      margin: 'auto',
      borderRadius: '130px'
    }),
    title: css({
      marginTop: rhythm(0.5),
      fontSize: '2rem',
      textAlign: 'center',
    }),
    subtitle: css({
      marginTop: rhythm(0.5),
      fontWeight: '400'
    }),
    social: css({
      marginTop: rhythm(0.5)
    }),
    wave: css({
      fill: Colors.bubbles,
      height: rhythm(3),
      width: '100%'
    })
  }

  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <div>
          <img css={styles.icon} src={data.site.siteMetadata.icon} />
          <h1 css={styles.title}>
            {data.site.siteMetadata.author}
          </h1>
          <h2 css={styles.subtitle}>
            {data.site.siteMetadata.description}
          </h2>
          <div css={styles.social}>
            <Social />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
           css={styles.wave}
           preserveAspectRatio="none"
           aria-hidden="true"
           focusable="false"
           viewBox="0 0 100 30">
        <path d="M100 0L100 7.5C85.5 11.85 76.44 14.57 72.82 15.65C66.18 17.65 59.04 17.09 52.79 14.09C47.99 11.78 54.73 15.02 52.79 14.09C38.34 7.15 21.11 9.88 9.51 20.94C8.24 22.14 5.07 25.17 0 30L0 0L100 0Z">
          <animate attributeName="d" values="
          M100 0L100 7C85 11 76 14 72 15C66 17 59 17 52 14C47 11 54 15 52 14C38 7 21 9 9 20C8 22 5 25 0 30L0 0L100 0Z;
          M100 0L100 26C94 23 91 22 90 21C76 14 61 11 46 11C44 11 51 11 46 11C37 11 27 13 19 17C16 18 10 21 0 26L0 0L100 0Z;
          M100 0L100 30C89 23 82 19 79 18C72 14 63 14 55 19C51 21 57 17 55 19C41 28 23 29 8 22C7 22 4 20 0 18L0 0L100 0Z;
          M100 0L100 26C94 23 91 22 90 21C76 14 61 11 46 11C44 11 51 11 46 11C37 11 27 13 19 17C16 18 10 21 0 26L0 0L100 0Z;
          M100 0L100 7C85 11 76 14 72 15C66 17 59 17 52 14C47 11 54 15 52 14C38 7 21 9 9 20C8 22 5 25 0 30L0 0L100 0Z
          "
          repeatCount="indefinite" dur="20s" />
        </path>
      </svg>
    </header>
  )
}
