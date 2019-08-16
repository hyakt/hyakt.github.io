import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql } from "gatsby"

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

  return (
    <div>
      { Object.keys(data.site.siteMetadata.socials).map((e: string) =>
        {
          return <FontAwesomeIcon icon={faTwitter} />
        })
      }
    </div>
  )

}
