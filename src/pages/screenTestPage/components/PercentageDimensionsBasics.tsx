import {Component} from "react";
import {View} from "@tarojs/components";

export default class PercentageDimensionsBasics extends Component {
    render() {
        return (
            <View style={{ height: '100vh' }}>
                <View style={{
                    height: '15%', backgroundColor: 'powderblue'
                }}
                />
                <View style={{
                    width: '66%', height: '35%', backgroundColor: 'skyblue'
                }}
                />
                <View style={{
                    width: '33%', height: '50%', backgroundColor: 'steelblue'
                }}
                />
            </View>
        );
    }
}
