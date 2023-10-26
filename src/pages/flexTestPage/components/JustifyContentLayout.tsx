import {Component} from "react";
import {View} from "@tarojs/components";
import PreViewLayout from "@/pages/flexTestPage/components/PreViewLayout";
import {Property} from "csstype";
import {styles} from "@/pages/flexTestPage/components/style/justifyContentStyle";

interface IState {
    justifyContent: Property.JustifyContent
}
export default class JustifyContentLayout extends Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {justifyContent: 'flex-start'}
    }

    render() {
        const style1 = {...styles.box, ...{ backgroundColor: "powderblue" }}
        const style2 = {...styles.box, ...{ backgroundColor: "skyblue" }}
        const style3 = {...styles.box, ...{ backgroundColor: "steelblue" }}
        return (
            <PreViewLayout
              label='justifyContent'
              selectedValue={this.state.justifyContent}
              values={[
                    "flex-start",
                    "flex-end",
                    "center",
                    "space-between",
                    "space-around",
                    "space-evenly",
                ]}
              setSelectedValue={(value: any) => {
                  this.setState({ justifyContent: value })
              }}
            >
                <View style={style1} />
                <View style={style2} />
                <View style={style3} />
            </PreViewLayout>
        );
    }
}
