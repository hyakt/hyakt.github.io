import React from 'react'
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql } from 'gatsby'

export const Social: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query Query {
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
      }
    `
  )

  const styles = {
    container: css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyItems: 'center'
    }),
    iconLink: css({
      margin: '0 0.4rem',
      display: 'block',
      width: '3rem',
      height: '2rem'
    }),
    icon: css({
      fontSize: '2rem',
      padding: '0.25rem'
    })
  }

  return (
    <div css={styles.container}>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.github}
        css={styles.iconLink}
      >
        <FontAwesomeIcon icon={faGithub} css={styles.icon} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.twitter}
        css={styles.iconLink}
      >
        <FontAwesomeIcon icon={faTwitter} css={styles.icon} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.linkedin}
        css={styles.iconLink}
      >
        <FontAwesomeIcon icon={faLinkedin} css={styles.icon} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href={data.site.siteMetadata.socials.facebook}
        css={styles.iconLink}
      >
        <FontAwesomeIcon icon={faFacebook} css={styles.icon} />
      </a>
    </div>
  )
}
