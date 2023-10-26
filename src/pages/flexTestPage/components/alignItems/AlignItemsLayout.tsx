import {Component} from "react";
import PreViewLayout from "@/pages/flexTestPage/components/PreViewLayout";
import {View} from "@tarojs/components";
import {styles} from "@/pages/flexTestPage/components/style/justifyContentStyle";

interface IState {
    alignItems: string;
}
export default class AlignItemsLayout extends Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {alignItems: 'stretch'};
    }

    render() {
        const style1 = {...styles.box, ...{ backgroundColor: "powderblue" }}
        const style2 = {...styles.box, ...{ backgroundColor: "skyblue" }}
        const style3 = {...styles.box, ...{  backgroundColor: "steelblue", width: "auto", minWidth: 50 }}
        return (
            <PreViewLayout
              label='alignItems'
              selectedValue={this.state.alignItems}
              values={[
                    "stretch",
                    "flex-start",
                    "flex-end",
                    "center",
                    "baseline",
                ]}
              setSelectedValue={(value) => {
                    this.setState({ alignItems: value })
                }}
            >
                <View style={style1} />
                <View style={style2} />
                <View style={style3} />
            </PreViewLayout>
        );
    }

}
