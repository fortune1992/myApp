import {View, Text} from '@tarojs/components'
import Taro, {useLoad} from '@tarojs/taro'
import './index.scss'
import NavCustomBar from "@/components/NavCustomBar";
import {homeStyle} from "@/styles/homeStyle";
import {createErrorBoundary} from "@/widget/ErrorBoundary";
import {useEffect} from "react";

function Index() {

    useLoad(() => {
        console.log('Page loaded.')
        Taro.request({
            url: 'https://www.wanandroid.com/article/list/0/json',
            success: (res) => {
                console.log(res)
            }
        })
    })

    useEffect(() => {
        throw new Error('I crashed!')
    })

    return (
        <View className='taro_page' style={homeStyle.rootStyle}>
            <NavCustomBar mainTitle='首页' />
            <Text>你好</Text>
        </View>
    )
}

export default createErrorBoundary(Index)
