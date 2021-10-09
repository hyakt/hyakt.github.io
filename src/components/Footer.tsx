import React from 'react'
import { css, useTheme } from '@emotion/react'

export const Footer: React.FC = () => {
  const theme = useTheme()

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
      background: theme.colors.bubbles
    }),
    copyright: css({
      fontWeight: 300,
      color: theme.colors.fg,
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
