import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Montserrat',
    'sans-serif'
  ],
  bodyFontFamily: ['Noto Sans JP', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['300', '400', '500', '700', '900']
    },
    {
      name: 'Noto Sans JP',
      styles: ['300', '400', '500', '700', '900']
    }
  ],
  includeNormalize: false
})

const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
