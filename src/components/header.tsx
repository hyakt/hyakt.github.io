import React from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

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
      padding: '2rem',
      height: '20rem',
      width: '100%',
      backgroundColor: 'rgba(0, 255, 0, 0.5)'
    }),
    icon: css({
      borderRadius: '130px'
    })
  }

  return (
    <header css={styles.container}>
      <div>
        <h1>
          {data.site.siteMetadata.author}
        </h1>
        {data.site.siteMetadata.description}
        <img css={styles.icon} src={data.site.siteMetadata.icon} />
      </div>
    </header>
  )
}
