// 引入 Form 组件
import { View, Input, Text } from '@tarojs/components'
import {Component} from "react";

export default class InputComponent  extends Component {

    render () {
        return (
            <View className='example-body'>
                <Text>可以自动聚焦的 input</Text>
                <Input type='text' placeholder='将会获取焦点' focus />
                <Text>控制最大输入长度的 input</Text>
                <Input type='text' placeholder='最大输入长度为 10' maxlength={10} />
                <Text>数字输入的 input</Text>
                <Input type='number' placeholder='这是一个数字输入框' />
                <Text>密码输入的 input</Text>
                <Input type='safe-password' password placeholder='这是一个密码输入框' />
                <Text>带小数点的 input</Text>
                <Input type='digit' placeholder='带小数点的数字键盘' />
                <Text>身份证输入的 input</Text>
                <Input type='idcard' placeholder='身份证输入键盘' />
                <Text>控制占位符颜色的 input</Text>
                <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red' />
            </View>
        )
    }
}
