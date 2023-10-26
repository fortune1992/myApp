export default definePageConfig({
  navigationBarTitleText: 'image测试',
  disableScroll: true,
  renderer: 'skyline',
  componentFramework: "glass-easel",
  rendererOptions: {
    skyline: {
      "defaultDisplayBlock": true,
      "disableABTest": true,
    }
  }
})
