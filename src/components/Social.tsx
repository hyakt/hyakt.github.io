import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  iconLink: css({
    margin: '1rem',
    display: 'block'
  }),
  icon: css({
    height: '2.5rem',
    width: '2.5rem'
  })
}

export const Social: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socials {
              github
              twitter
              linkedin
              facebook
            }
          }
        }
        github: file(relativePath: { eq: "social/github.svg" }) {
          publicURL
        }
        twitter: file(relativePath: { eq: "social/twitter.svg" }) {
          publicURL
        }
        linkedin: file(relativePath: { eq: "social/linkedin.svg" }) {
          publicURL
        }
      }
    `
  )

  return (
    <div css={styles.container}>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.github}
        css={styles.iconLink}
      >
        <img css={styles.icon} src={data.github.publicURL} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.twitter}
        css={styles.iconLink}
      >
        <img css={styles.icon} src={data.twitter.publicURL} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.linkedin}
        css={styles.iconLink}
      >
        <img css={styles.icon} src={data.linkedin.publicURL} />
      </a>
    </div>
  )
}
