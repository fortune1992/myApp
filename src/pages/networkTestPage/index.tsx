import {View, Text, Button, ScrollView} from '@tarojs/components'
import './index.scss'
import {Component} from "react";
import Taro from "@tarojs/taro";

interface IState {
    response: any;
    width: number;
}

export default class NetworkTestPage extends Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = {response: ''}
    }

    render() {
        return (
            <View style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <Button onClick={this.request}>
                    request
                </Button>
               <ScrollView>
                   <Text>
                       {this.state.response}
                   </Text>
               </ScrollView>
            </View>
        );
    }

    request = () => {
        Taro.showLoading({
            title: '加载中',
        })
        Taro.request({
            url: 'https://www.wanandroid.com/banner/json',
            success: (res) => {
                Taro.hideLoading()
                console.log(typeof res.data)
                this.setState({response: JSON.stringify(res.data)})
            },
            fail: (res) => {
                Taro.hideLoading()
            }
        })
    }
}
