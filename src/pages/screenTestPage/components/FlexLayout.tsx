import {Component} from "react";
import {View} from "@tarojs/components";

export default class FlexLayout extends Component {
    render() {
        return (
            // 试试去掉父View中的`height: '100vh'`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`height: '100vh'`试试看？
            <View style={{display: 'flex', flexDirection: 'column',height: '100vh'}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
