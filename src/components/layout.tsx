import React from "react"
import emotionReset from 'emotion-reset'
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

const styles = {
  container: css({
    backgroundColor: '#ff0'
  })
}

export default ({ children }) => {
  return (
    <>
      <Global styles={emotionReset} />
      <div css={styles.container} >
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}
