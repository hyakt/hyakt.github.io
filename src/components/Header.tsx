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
        <path d="M100 0L100 10C94.36 13.92 90.83 16.36 89.42 17.34C77.64 25.52 62.12 25.87 49.99 18.23C45.99 15.71 53.99 20.75 49.99 18.23C38.04 10.7 22.62 11.63 11.66 20.53C10.11 21.79 6.22 24.95 0 30L0 0L100 0Z">
          <animate attributeName="d" values="
          M100 0L100 10C94 13 90 16 89 17C77 25 62 25 49 18C45 15 53 20 49 18C38 10 22 11 11 20C10 21 6 24 0 30L0 0L100 0Z;
          M100 0L100 18C98 17 97 16 97 16C80 6 59 6 43 17C39 19 48 14 42 17C30 25 14 25 2 18C2 18 1 17 0 17L0 0L100 0Z;
          M100 0L100 10C94 13 90 16 89 17C77 25 62 25 49 18C45 15 53 20 49 18C38 10 22 11 11 20C10 21 6 24 0 30L0 0L100 0Z
          " repeatCount="indefinite" dur="20s" />
        </path>
      </svg>
    </header>
  )
}
