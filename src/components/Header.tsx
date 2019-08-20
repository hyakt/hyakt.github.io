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
           viewBox="0 0 54 14"
           preserveAspectRatio="none"
           aria-hidden="true"
           focusable="false">
        viewBox="0 0 54 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false">
        <path d="M 27 10.2878 C 20.3523 12.1439 13.3523 13.4963 0 13.4963 L 0 0 L 54 0 L 54 3.28785 C 40.6477 3.28785 33.6477 8.43177 27 10.2878 Z">
          <animate attributeName="d" values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z" repeatCount="indefinite" dur="20s">
          </animate>
        </path>
      </svg>
    </header>
  )
}
