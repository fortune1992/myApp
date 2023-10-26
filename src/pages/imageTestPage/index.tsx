import { View, Image, Snapshot } from '@tarojs/components'
import './index.scss'
import { Component } from "react";
import Taro from '@tarojs/taro';

export default class ImageTestPage extends Component {

  render() {
    return (
      <View style={{ width: '100%', height: '100vh', background: 'black' }}>
        <Snapshot id='mySnapshot'>
          <View
            style={{
              width: 300,
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Image
              src='https://reactnative.dev/docs/assets/p_cat1.png'
              style={{ width: 200, height: 200 }}
              onClick={this.takeSnapshot}
            />
          </View>
        </Snapshot>
      </View>
    )
  }

  private takeSnapshot = () => {
    Taro.createSelectorQuery()
      .select('#mySnapshot')
      .fields({
        node: true,
        size: true
      }, (res) => {
        console.log('mySnapshot', res);
      })
      .exec();
  }
}
