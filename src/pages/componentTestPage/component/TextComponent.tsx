import {Component} from "react";
import {Text} from "@tarojs/components";

export default class TextComponent extends Component {
    render() {
        return (
            <Text style={{marginTop: 20, fontSize: 20, color: '#FE3666'}}>
                Hello world!
                <Text style={{fontSize: 10, color: '#000000', fontWeight: 'bold'}}>
                    实现Spannable效果
                </Text>
            </Text>
        );
    }
}
