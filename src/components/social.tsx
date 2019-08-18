import React from 'react'
import { css } from "@emotion/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faFacebook  } from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql, Link } from "gatsby"
import Colors from '../constants/Colors'

export default () => {
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
      width: '1.5rem',
      height: '1.5rem',
      background: Colors.bubbles,
      borderRadius: '1rem',
      boxShadow: '2px 2px 4px gray'
    }),
    icon: css({
      padding: '0.25rem'
    })
  }

  return (
    <div css={styles.container}>
      <a href={data.site.siteMetadata.socials.github} css={styles.iconLink}>
        <FontAwesomeIcon icon={faGithub} css={styles.icon} />
      </a>
      <a href={data.site.siteMetadata.socials.twitter} css={styles.iconLink}>
        <FontAwesomeIcon icon={faTwitter} css={styles.icon} />
      </a>
      <a href={data.site.siteMetadata.socials.linkedin} css={styles.iconLink}>
        <FontAwesomeIcon icon={faLinkedin} css={styles.icon} />
      </a>
      <a href={data.site.siteMetadata.socials.facebook} css={styles.iconLink}>
        <FontAwesomeIcon icon={faFacebook} css={styles.icon} />
      </a>
    </div>
  )

}
