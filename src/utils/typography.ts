import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Noto Sans JP', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Noto Sans JP',
      styles: ['300', '400', '500', '700', '900']
    },
    {
      name: 'Londrina Outline',
      styles: ['400']
    }
  ],
  includeNormalize: false
})

const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
