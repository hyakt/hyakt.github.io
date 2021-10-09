import React from 'react'
import { Global, css, ThemeProvider } from '@emotion/react'

import { reset } from '../utils/reset'
import { theme } from '../utils/theme'

const global = css`
  body {
    background: ${theme.colors.bubbles};
    border-left: 1rem solid ${theme.colors.bubbles};
    border-right: 1rem solid ${theme.colors.bubbles};
    color: ${theme.colors.fg};
  }
  a:link {
    color: ${theme.colors.fg};
  }
  a:visited {
    color: ${theme.colors.fg};
  }
  a:hover {
    color: ${theme.colors.fg};
  }
  a:active {
    color: ${theme.colors.fg};
  }
`

const background = css`
  background: ${theme.colors.paleale};
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: 1s;
`

export const Layout: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Global styles={global} />
      <div css={background}>
        <main>{props.children}</main>
      </div>
    </ThemeProvider>
  )
}
