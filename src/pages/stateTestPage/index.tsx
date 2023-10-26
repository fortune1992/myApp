import {Component} from "react";
import {View, Text, Button} from "@tarojs/components";

interface IProps {
    name: string;
}

interface IState {
    isHungry: boolean;
}

class Cat extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { isHungry: true };
    }

    render() {
        return (
            <View>
                <Text>
                    I am {this.props.name}, and I am
                    {this.state.isHungry ? " hungry" : " full"}!
                </Text>
                <Button
                  style={{background: 'blue', color: 'white'}}
                  onClick={() => {
                        this.setState({isHungry: false});
                    }}
                  disabled={!this.state.isHungry}
                >
                    {this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"}
                </Button>
            </View>
        );
    }
}

export default class Cafe extends Component {
    render() {
        return (
            <>
                <Cat name='Munkustrap' />
                <Cat name='Spot' />
            </>
        );
    }
}
