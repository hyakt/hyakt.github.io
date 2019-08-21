import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from '../utils/typography'
import Colors from '../constants/Colors'
import Overflow from '../components/Overflow'
import Social from '../components/Social'

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
      textAlign: 'center'
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
      <Overflow />
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
        <path d="M100 0L100 15C95.15 17.56 92.12 19.16 90.91 19.8C77.97 26.62 62.37 26.02 49.99 18.23C45.99 15.71 53.99 20.75 49.99 18.23C37.31 10.24 21.76 8.21 7.45 12.67C6.46 12.98 3.97 13.76 0 15L0 0L100 0Z">
          <animate attributeName="d" values="
          M100 0L100 15C95.15 17.56 92.12 19.16 90.91 19.8C77.97 26.62 62.37 26.02 49.99 18.23C45.99 15.71 53.99 20.75 49.99 18.23C37.31 10.24 21.76 8.21 7.45 12.67C6.46 12.98 3.97 13.76 0 15L0 0L100 0Z;
          M100 0L100 15C99.08 14.54 98.51 14.26 98.28 14.14C80.76 5.38 59.9 6.53 43.44 17.17C39.3 19.85 48.05 14.19 42.57 17.73C30.55 25.51 15.04 25.3 3.23 17.22C2.8 16.92 1.73 16.18 0 15L0 0L100 0Z;
          M100 0L100 15C95.15 17.56 92.12 19.16 90.91 19.8C77.97 26.62 62.37 26.02 49.99 18.23C45.99 15.71 53.99 20.75 49.99 18.23C37.31 10.24 21.76 8.21 7.45 12.67C6.46 12.98 3.97 13.76 0 15L0 0L100 0Z
          " repeatCount="indefinite" dur="20s" />
        </path>
      </svg>
    </header>
  )
}
