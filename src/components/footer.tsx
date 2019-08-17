import React from 'react'
import { css } from "@emotion/core"

import Colors from '../constants/Colors'

export default () => {
  const styles = {
    container: css({
      position: 'fixed',
      bottom: 0,
      height: '1.2rem',
      width: '100%',
      background: Colors.bubbles
    }),
    copyright: css({
      textAlign: 'center',
      fontSize: '0.8rem',
    })
  }

  return (
    <footer>
      <div css={styles.container}>
      </div>
    </footer>
  )
}




