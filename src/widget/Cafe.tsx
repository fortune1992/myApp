import {Component} from 'react'
import {Text, View} from '@tarojs/components';

interface ICatProp {
  name: string
}
class Cat extends Component<ICatProp> {
  render() {
    return (
      <Text>Hello, I am your {this.props.name}!</Text>
    );
  }
}

export default class Cafe extends Component {
  render() {
    return (
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Cat name='Maru' />
        <Cat name='Jellylorum' />
        <Cat name='Spot' />
      </View>
    );
  }
}
