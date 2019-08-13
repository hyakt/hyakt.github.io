console.log("Hello! I’m job hunting now! please email me: hyakt0@gmail.com ")

document.addEventListener('DOMContentLoaded', () => {
  new Zooming({
    enableGrab: true, // ズーム時の画像移動の許可
    preloadImage: true, // 画像切り替えの許可
    bgColor: "rgb(0, 0, 0)",
    bgOpacity: 0.5,
    scaleBase: 0.8,
    scaleExtra: 2
  }).listen('.img-zoomable')

  const productColor = '#78dce8'
  const ossColor = '#fc9867'
  const researchColor = '#ff6188'

  Array.prototype.forEach.call(document.getElementsByClassName('tag'), (t) => {
    const tag = t.childNodes[0]
    if (tag.className === 'product') tag.parentElement.parentElement.style.backgroundColor = productColor
    if (tag.className === 'oss') tag.parentElement.parentElement.style.backgroundColor = ossColor
    if (tag.className === 'research') tag.parentElement.parentElement.style.backgroundColor = researchColor
  })
})


