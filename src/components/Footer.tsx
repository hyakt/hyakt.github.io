import React from 'react'
import { css } from '@emotion/core'
import Social from './social'

import Colors from '../constants/Colors'

export default () => {
  const styles = {
    container: css({
      position: 'fixed',
      display: 'flex',
      alignItems: 'center', // does vertically center the desired content
      justifyContent: 'center', // horizontally centers single line items
      textAlign: 'center',
      bottom: 0,
      height: '1.2rem',
      width: '100%',
      background: Colors.bubbles
    }),
    copyright: css({
      fontWeight: 300,
      color: Colors.fg,
      fontSize: '0.5rem'
    })
  }

  return (
    <footer>
      <div css={styles.container}>
        <div css={styles.copyright}>Copyright© Hayato KAJIYAMA All Rights Reserved.</div>
      </div>
    </footer>
  )
}
