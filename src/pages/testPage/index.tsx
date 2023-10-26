import { useLoad } from '@tarojs/taro'
import './index.scss'
import Cafe from "@/widget/Cafe";

export default function Testpage() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <Cafe />
  )
}
