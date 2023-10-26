import {Component} from "react";
import {View} from "@tarojs/components";

export default class FixedLayout extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column', display: 'flex'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
