import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: [
    'Helvetica Neue',
    'Helvetica',
    'Hiragino Sans',
    'Hiragino Kaku Gothic ProN',
    'Arial',
    'Yu Gothic',
    'Meiryo',
    'sans-serif'
  ],
  googleFonts: [
    {
      name: 'MontserratMontserrat',
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
