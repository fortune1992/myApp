import { ScrollView, View } from '@tarojs/components'
import {Component} from "react";

export default class ScrollViewComponent extends Component {
    constructor(props) {
        super(props)
    }

    onScrollToUpper(e){
        console.log(e.detail)
    }

    // or 使用箭头函数
    // onScrollToUpper = (e) => {
    //  console.log(e.detail)
    // }

    onScroll(e){
        console.log(e.detail)
    }

    render() {
        const scrollStyle = {
            height: '100vh'
        }
        const scrollTop = 0
        const Threshold = 20
        const vStyleA = {
            height: 150,
            background: 'rgb(26, 173, 25)'
        }
        const vStyleB = {
            height: 150,
            background: 'rgb(39,130,215)'
        }
        const vStyleC = {
            height: 150,
            background: 'red',
            color: '#333'
        }
        return (
            <ScrollView
              className='scrollview'
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
            >
                <View style={vStyleA}>A</View>
                <View style={vStyleB}>B</View>
                <View style={vStyleC}>C</View>
                <View style={vStyleA}>A</View>
                <View style={vStyleB}>B</View>
                <View style={vStyleC}>C</View>
            </ScrollView>
        )
    }
}
