import {View, Button} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.scss'
import NavCustomBar from "@/components/NavCustomBar";
import {homeStyle} from "@/styles/homeStyle";

export default function Index() {

    useLoad(() => {
        console.log('Page loaded.')
    })

    const gotoMine = () => {
        Taro.navigateTo({
            url: `/pages/minePage/index`
        })
    }

    const gotoWeb = () => {
        Taro.navigateTo({
            url: `/pages/webPage/index?url=${encodeURIComponent("https://docs.taro.zone/docs/react-error-handling/index.html")}`
        })
    }

    const gotoListPage = () => {
        Taro.navigateTo({
            url: `/pages/listPage/index?url=${encodeURIComponent("https://docs.taro.zone/docs/react-error-handling/index.html")}`
        })
    }

    return (
        <View style={homeStyle.containerStyle}>
            <NavCustomBar mainTitle='首页' />
            <Button style={{ marginTop: 20 }} onClick={gotoMine}>跳转到我的</Button>
            <Button onClick={gotoWeb}>跳转到网页</Button>
            <Button onClick={gotoListPage}>跳转到列表页</Button>
        </View>
    )
}
