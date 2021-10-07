/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { css } from '@emotion/react'

import colors from '../constants/colors'

export const Footer: React.FC = () => {
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
      background: colors.bubbles
    }),
    copyright: css({
      fontWeight: 300,
      color: colors.fg,
      fontSize: '0.5rem'
    })
  }

  return (
    <footer>
      <div css={styles.container}>
        <div css={styles.copyright}>
          Copyright© Hayato Kajiyama All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
