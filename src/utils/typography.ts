import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Arial Black', 'sans-serif'],
  bodyFontFamily: [
    'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro',
    'メイリオ',
    'Meiryo',
    '游ゴシック',
    'Yu Gothic',
    'ＭＳ Ｐゴシック',
    'MS PGothic',
    'sans-serif'
  ],
  googleFonts: [
    {
      name: 'Londrina Outline',
      styles: ['400']
    }
  ],
  includeNormalize: false
})

const { rhythm, scale } = typography

export { rhythm, scale, typography as default }
