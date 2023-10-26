import {Component} from "react";
import {View, Text} from "@tarojs/components";
import {styles} from "@/pages/flexTestPage/components/style/justifyContentStyle";

export default class PreViewLayout extends Component<any, any> {
    render() {
        const {
            label,
            children,
            values,
            selectedValue,
            setSelectedValue,
        } = this.props;
        return (
            <View style={{padding: 10, display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                    {values.map((value) => (
                        <View
                          key={value}
                          onClick={() => setSelectedValue(value)}
                          style={this.getStyles(value, selectedValue)}
                        >
                            <Text style={this.getLabelStyles(value, selectedValue)}>
                                {value}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={this.getChildrenStyle(label, selectedValue)}>
                    {children}
                </View>
            </View>
        );
    }

    getStyles = (value: string, selectedValue: string) => {
        if (selectedValue === value) {
            return {...styles.button, ...styles.selected}
        } else {
            return styles.button
        }
    }

    getLabelStyles = (value: string, selectedValue: string) => {
        if (selectedValue === value) {
            return {...styles.buttonLabel, ...styles.selectedLabel}
        } else {
            return styles.buttonLabel
        }
    }

    getChildrenStyle = (label, selectedValue) => {
        // return styles.container
        return {...styles.container, ...{[label]: selectedValue}}
    }
}
