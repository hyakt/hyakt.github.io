document.addEventListener('DOMContentLoaded', function () {
  new Zooming({
    enableGrab: true, // ズーム時の画像移動の許可
    preloadImage: true, // 画像切り替えの許可
    bgColor: "rgb(0, 0, 0)",
    bgOpacity: 0.5,
    scaleBase: 0.8,
    scaleExtra: 2
  }).listen('.img-zoomable')
})

console.log("Hello! I'm glad to see you!")


