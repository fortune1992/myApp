import {Component} from "react";
import {View, Text} from "@tarojs/components";
import {styles} from "@/pages/styleTestPage/styles";

export default class StyleTestPage extends Component {
    render() {
        const style1 = {...styles.bigBlue, ...styles.red}
        const style2 = {...styles.red, ...styles.bigBlue}
        return (
            <View style={styles.container}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={style1}>bigBlue, then red</Text>
                <Text style={style2}>red, then bigBlue</Text>
            </View>
        )
    }
}
