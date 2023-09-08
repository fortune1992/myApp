import {View, Text} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.scss'
import NavCustomBar from "@/components/NavCustomBar";
import {homeStyle} from "@/styles/homeStyle";

export default function Index() {

    useLoad(() => {
        console.log('Page loaded.')
        Taro.request({
            url: 'https://www.wanandroid.com/article/list/0/json',
            success: (res) => {
                console.log(res)
            }
        })
    })

    return (
        <View className='taro_page' style={homeStyle.rootStyle}>
            <NavCustomBar mainTitle='首页' />
            <Text>你好</Text>
        </View>
    )
}
