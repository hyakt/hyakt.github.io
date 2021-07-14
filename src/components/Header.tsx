import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import Colors from '../constants/Colors'
import { Overflow } from '../components/Overflow'
import { Social } from '../components/Social'

export const Header: React.FC = () => {
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
      height: '100vh',
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
      transition: '0.8s',
      ':hover': {
        transform: 'rotate(-360deg)'
      },
      height: '15rem',
      width: '15rem'
    }),
    iconImage: css({
      borderRadius: 'inherit',
      objectFit: 'contain',
      pointerEvents: 'none'
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
          <div css={styles.icon}>
            <img css={styles.iconImage} src={data.site.siteMetadata.icon} />
          </div>
          <h1 css={styles.title}>{data.site.siteMetadata.author}</h1>
          <h2 css={styles.subtitle}>{data.site.siteMetadata.description}</h2>
          <div css={styles.social}>
            <Social />
          </div>
        </div>
      </div>
    </header>
  )
}
