import { Component } from "react";
import './index.scss'
import { View, Text } from "@tarojs/components";
import Taro from '@tarojs/taro';

export default class StyleTestPage extends Component {
  render() {
    console.log(JSON.stringify(Taro.getSystemInfoSync()))
    return (
      <View className='container'>
        <Text className='red'>just red</Text>
        <Text className='bigBlue'>just bigBlue</Text>
        <Text className='bigBlue red'>bigBlue, then red</Text>
        <Text className='red bigBlue'>red, then bigBlue</Text>
      </View>
    )
  }
}