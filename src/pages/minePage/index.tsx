import {View, Button} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function MinePage() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const showDialog = () => {
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

  const showToast = (title: string) => () => {
    Taro.showToast({
      title,
      icon: 'none',
      duration: 2000
    })
  }

  const request = () => {
    Taro.request({
      url: 'https://www.wanandroid.com/article/list/0/json',
      success: (res) => {
        console.log(JSON.stringify(res.data))
      }
    })
  }

  return (
    <View className='minePage'>
      <Button onClick={showToast('成功')}>展示toast</Button>
      <Button onClick={showLoading}>展示loading</Button>
      <Button onClick={showDialog}>展示弹窗</Button>
      <Button onClick={request}>请求网络</Button>
    </View>
  )
}
