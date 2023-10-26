import {Component} from "react";
import {Image, Text, View} from "@tarojs/components";
import backImage from "../../../images/ic_back.jpg"

export default class ImageComponent extends Component {
    render() {
        return (
            <View style={{ height: '100vh', flexDirection: 'column', display: "flex", alignItems: 'center' }}>
                <Text>网络图片</Text>
                <Image
                  src='https://reactnative.dev/docs/assets/p_cat1.png'
                  style={{width: 200, height: 200}}
                />
                <Text>本地图片</Text>
                <Image
                  src={backImage}
                  style={{width: 72, height: 72}}
                />
            </View>
        );
    }
}
