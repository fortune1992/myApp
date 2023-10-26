import {Component} from "react";
import PreViewLayout from "@/pages/flexTestPage/components/PreViewLayout";
import {View} from "@tarojs/components";
import {styles} from "@/pages/flexTestPage/components/style/justifyContentStyle";

interface IState {
    flexDirection: string;
}
export default class FlexDirectionLayout extends Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = {flexDirection: 'column'};
    }
    render() {
        const style1 = {...styles.box, ...{ backgroundColor: "powderblue" }}
        const style2 = {...styles.box, ...{ backgroundColor: "skyblue" }}
        const style3 = {...styles.box, ...{ backgroundColor: "steelblue" }}
        return (
            <PreViewLayout
              label='flexDirection'
              values={["column", "row", "row-reverse", "column-reverse"]}
              selectedValue={this.state.flexDirection}
              setSelectedValue={(value) => {
                  this.setState({ flexDirection: value })
              }}
            >
                <View style={style1} />
                <View style={style2} />
                <View style={style3} />
            </PreViewLayout>
        );
    }
}
