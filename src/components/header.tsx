import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Social from './social'
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
    header: css({
    }),
    container: css({
      display: 'flex',
      height: '20rem',
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
      marginTop: '1rem',
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center'
    }),
    subtitle: css({
      marginTop: '1rem'
    }),
    wave: css({
      fill: Colors.bubbles,
      height: '6rem',
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
          <p css={styles.subtitle}>
            {data.site.siteMetadata.description}
          </p>
          <div css={styles.subtitle}>
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
        <path d="M 27 10.2878 C 20.3523 12.1439 13.3523 13.4963 0 13.4963 L 0 0 L 54 0 L 54 3.28785 C 40.6477 3.28785 33.6477 8.43177 27 10.2878 Z">
        </path>
      </svg>
    </header>
  )
}
