import {Component} from 'react';
import {Button, Text, View} from '@tarojs/components';
import Taro from "@tarojs/taro";

interface IState {
    animationData: any
}

class MyComponent extends Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            animationData: {}
        };
    }

    render() {
        return (
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column'
            }}
            >
                <Button
                    style={{marginBottom: 50}}
                    onClick={this.onRotate}>
                    旋转
                </Button>
                <View animation={this.state.animationData}>
                    <Text style={{display: 'inline-block'}}>
                        Hello, Taro!
                    </Text>
                </View>
            </View>
        );
    }

    onRotate = () => {
        const animation = Taro.createAnimation({duration: 3000});
        animation.scale(2, 2).rotate(360).step();
        this.setState({
            animationData: animation.export()
        });
        setTimeout(() => {
            animation.scale(1, 1).rotate(0).step(); // 恢复初始状态
            this.setState({
                animationData: animation.export()
            });
        }, 3000);
    }
}

export default MyComponent;
