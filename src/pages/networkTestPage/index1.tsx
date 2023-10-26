import { View, Text } from '@tarojs/components'
import './index.scss'
import {Component} from "react";

export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页',
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidUpdate() {}

    render() {
        return (
            <View className='index'>
                <Text>1</Text>
            </View>
        )
    }
}
