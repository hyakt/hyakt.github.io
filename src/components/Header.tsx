import React from 'react'
import { css, useTheme } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import { Overflow } from '../components/Overflow'
import { Social } from '../components/Social'
import { StaticImage } from 'gatsby-plugin-image'

export const Header: React.FC = () => {
  const theme = useTheme()

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
        profile: file(relativePath: { eq: "profile.png" }) {
          publicURL
        }
      }
    `
  )

  const styles = {
    container: css({
      display: 'flex',
      height: '100vh',
      backgroundColor: theme.colors.bubbles,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      backfaceVisibility: 'hidden'
    }),
    icon: css({
      display: 'block',
      margin: 'auto',
      height: '20rem',
      width: '20rem',
      userSelect: 'none'
    }),
    iconImage: css({
      borderRadius: 'inherit',
      objectFit: 'contain',
      pointerEvents: 'none',
      filter: 'drop-shadow(2px 3px 3px #949494)'
    }),
    title: css({
      marginTop: rhythm(0.5),
      fontSize: '2rem',
      textAlign: 'center'
    }),
    subtitle: css({
      marginTop: rhythm(0.5),
      fontWeight: 'normal',
      fontSize: '1rem',
      textAlign: 'center'
    }),
    social: css({
      marginTop: rhythm(1)
    }),
    wave: css({
      fill: theme.colors.bubbles,
      width: '100%'
    }),
    bubbles: css({
      fill: theme.colors.paleale,
      stroke: theme.colors.bubbles,
      strokeWidth: '2px'
    })
  }

  return (
    <header>
      <Overflow />
      <div css={styles.container}>
        <div>
          <div css={styles.icon}>
            <a href={data.site.siteMetadata.icon} download>
              <StaticImage
                css={styles.iconImage}
                src='../images/profile.png'
                alt='🍺'
                placeholder='blurred'
              />
            </a>
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
