import { View, Image } from '@tarojs/components'
import './index.scss'
import {Component} from "react";

export default class ImageTestPage extends Component {

  render() {
    return (
      <View style={{
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
      }}
      >
        <Image
          src='https://reactnative.dev/docs/assets/p_cat1.png'
          style={{width: 200, height: 200}}
        />
      </View>
    )
  }
}
