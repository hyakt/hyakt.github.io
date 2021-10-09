import { Theme as EmotionTheme } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {
    colors: {
      fg: string
      bubbles: string
      pilsner: string
      paleale: string
      amber: string
      stout: string
      brewdog: string
    }
  }
}
