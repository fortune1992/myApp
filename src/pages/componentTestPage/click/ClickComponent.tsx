import {Component} from "react";
import {Button, View} from "@tarojs/components";
import Taro from "@tarojs/taro";

export default class ClickComponent extends Component {

    render() {
        return (
            <View style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
            }}
            >
                <Button onClick={this.clickButton}>
                    click me
                </Button>
            </View>
        );
    }

    clickButton = () => {
        Taro.showToast({
            title: '我被点击了',
            icon: 'none',
            duration: 2000
        })
    }
}
