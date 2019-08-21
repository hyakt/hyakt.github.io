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
      textAlign: 'center'
    }),
    subtitle: css({
      marginTop: rhythm(0.5),
      fontWeight: '400'
    }),
    social: css({
      marginTop: rhythm(0.5)
    }),
    overflow: css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      objectFit: 'cover',
      stroke: Colors.bubbles,
      fill: Colors.bubbles,
      fillOpacity: 0.6,
      filter: 'blur(0.1rem) drop-shadow(0.2rem 1rem 0.8rem #ccc)'
    }),
    wave: css({
      fill: Colors.bubbles,
      height: rhythm(3),
      width: '100%'
    })
  }

  return (
    <header css={styles.header}>
      <svg xmlns="http://www.w3.org/2000/svg"
           css={styles.overflow}
           preserveAspectRatio="none"
           aria-hidden="true"
           focusable="false"
           viewBox="0 0 1980 1080">
        <path d="M1980 0C1980 526.59 1980 855.71 1980 987.36C1980 1011.48 1944.99 1014.51 1940.85 990.75C1923.93 893.85 1893.11 717.38 1871.39 592.97C1866.71 566.19 1830.35 561.31 1818.78 585.91C1795.34 635.75 1787.75 651.87 1770.63 688.27C1747.9 736.6 1676.95 729.06 1664.87 677.04C1641.27 575.38 1627.18 514.7 1608.59 434.59C1591.96 362.95 1490.98 360.12 1470.36 430.72C1456.09 479.58 1473.07 421.44 1454.62 484.61C1437.86 542.01 1356.91 543.01 1338.73 486.04C1318.49 422.58 1339.53 488.54 1324.66 441.93C1270.29 271.53 1133.47 140.17 961 92.78C899.65 75.93 842.68 67.5 790.1 67.5C728.77 67.5 669.76 77 613.08 95.99C476.41 141.8 369.25 249.24 323.81 386.03C308.55 431.98 298.13 463.34 273.67 536.99C266.51 558.55 235.43 556.69 230.88 534.44C215.64 459.87 194.06 354.25 180.69 288.87C174.66 259.34 132.63 258.89 125.96 288.28C100.77 399.38 105.87 376.88 93.67 430.7C81.16 485.84 0 476.76 0 420.21C0 364.19 0 224.11 0 0L1980 0Z">
        </path>
      </svg>
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
