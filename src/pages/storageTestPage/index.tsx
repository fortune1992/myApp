import {View, Text, Input, Button} from '@tarojs/components'
import './index.scss'
import {Component, createRef} from "react";
import Taro from "@tarojs/taro";

interface IState {
    data: string;
}

const KEY_STORAGE = "test_key"
export default class StorageTestPage extends Component<{}, IState> {

    private inputRef = createRef<any>()

    constructor(props) {
        super(props);
        this.state = {data: Taro.getStorageSync<string>(KEY_STORAGE)}
    }

    componentDidMount() {
        console.log("env", process.env.NODE_ENV)
    }

    render() {
        return (
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Input
                    style={{border: '1px solid black'}}
                    type='text'
                    placeholder='输入存储数据'
                    focus
                    ref={this.inputRef} />
                <Button style={{marginBottom: 20}} onClick={this.saveStorage}>保存</Button>
                <Button style={{marginBottom: 20}} onClick={this.removeStorage}>删除</Button>
                <Button style={{marginBottom: 20}} onClick={this.clearStorage}>清空</Button>
                <Text>{this.state.data}</Text>
            </View>
        )
    }

    saveStorage = () => {
        const inputValue = this.inputRef?.current?.value
        this.setState({data: inputValue})
    }

    removeStorage = () => {
        Taro.removeStorageSync(KEY_STORAGE)
        this.setState({
            data: Taro.getStorageSync<string>(KEY_STORAGE)
        })
    }

    clearStorage = () => {
        Taro.clearStorageSync()
        this.setState({
            data: Taro.getStorageSync<string>(KEY_STORAGE)
        })
    }
}
