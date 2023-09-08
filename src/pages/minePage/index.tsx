import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function MinePage() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const myClick = () => {
    Taro.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  const showLoading = () => {
    Taro.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)
  }

  const showToast =() => {
    Taro.showToast({
      title: '成功',
      icon: 'none',
      duration: 2000
    })
  }

  return (
    <View className='minePage'>
      <Text onClick={showToast}>我的页面</Text>
    </View>
  )
}
