import {Component} from "react";
import {View} from "@tarojs/components";

export default class FlexTestLayout extends Component {
    render() {
        return (
            <View style={{ flexDirection: "column", display: 'flex', height: '100vh'}}>
                <View style={{ flex: 1, backgroundColor: "red" }} />
                <View style={{ flex: 2, backgroundColor: "darkorange" }} />
                <View style={{ flex: 3, backgroundColor: "green" }} />
            </View>
        );
    }
}
