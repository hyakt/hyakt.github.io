import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

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
    container: css({
      display: 'flex',
      height: rhythm(20),
      backgroundColor: Colors.bubbles,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      backfaceVisibility: 'hidden'
    }),
    icon: css({
      display: 'block',
      margin: 'auto',
      border: '6px solid #fff',
      borderRadius: '123px',
      boxShadow: '1px 0 1px #fff',
      transition: '1.5s',
      ':active': {
        transform: 'rotate(-20deg) translate3d(-600px, 1000px, 0px) scale(0.5)'
      }
    }),
    title: css({
      marginTop: rhythm(0.5),
      fontSize: '2rem',
      textAlign: 'center'
    }),
    subtitle: css({
      marginTop: rhythm(0.5),
      fontWeight: 'normal'
    }),
    social: css({
      marginTop: rhythm(0.5)
    }),
    wave: css({
      fill: Colors.bubbles,
      width: '100%'
    }),
    bubbles: css({
      fill: Colors.paleale,
      stroke: Colors.bubbles,
      strokeWidth: '2px'
    })
  }

  return (
    <header>
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
           viewBox="0 0 1200 100">
        <path d="M1200 0.08L1200 20C1061.99 23.82 926.9 24.07 794.74 20.75C596.49 15.77 537.89 1.04 400 0.08C298.43 -0.64 165.09 4.34 0 15L0 0.08L1200 0.08Z">
          <animate attributeName="d" values="M1200 0L1200 20C1061 23 926 24 794 20C596 15 537 1 400 0C298 -0 165 4 0 15L0 0L1200 0Z;
          M1200 0L1200 20C1061 18 926 15 794 12C596 7 537 18 400 17C298 16 165 15 0 15L0 0L1200 0Z;
          M1200 0L1200 20C1061 23 926 24 794 20C596 15 537 1 400 0C298 -0 165 4 0 15L0 0L1200 0Z
          " repeatCount="indefinite" dur="20s" />
        </path>
        <g css={styles.bubbles}>
          <path d="M1151 20C1151 25 1147 29 1142 29C1137 29 1133 25 1133 20C1133 15 1137 11 1142 11C1147 11 1151 15 1151 20Z" />
          <path d="M1101 19C1101 23 1098 26 1095 26C1091 26 1088 23 1088 19C1088 16 1091 13 1095 13C1098 13 1101 16 1101 19Z" />
          <path d="M1121 22C1121 25 1118 28 1114 28C1111 28 1108 25 1108 22C1108 18 1111 15 1114 15C1118 15 1121 18 1121 22Z" />
          <path d="M842 21C842 24 840 27 837 27C834 27 831 24 831 21C831 18 834 16 837 16C840 16 842 18 842 21Z" />
          <path d="M827 23C827 26 824 28 821 28C818 28 816 26 816 23C816 20 818 17 821 17C824 17 827 20 827 23Z" />
          <path d="M395 14C395 19 391 23 386 23C381 23 377 19 377 14C377 9 381 5 386 5C391 5 395 9 395 14Z" />
          <path d="M417 19C417 22 414 25 411 25C408 25 406 22 406 19C406 16 408 14 411 14C414 14 417 16 417 19Z" />
        </g>
      </svg>
    </header>
  )
}
