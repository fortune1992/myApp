import {WebView} from '@tarojs/components'
import './index.scss'
import {getCurrentInstance} from "@tarojs/runtime";
import React from "react";

export default class WebPage extends React.Component<any, any> {

  $instance = getCurrentInstance()
  handleMessage = () => {}

  render() {
    const url = decodeURIComponent(this.$instance.router?.params?.url as string)
    console.log('instance: ' + url)
    return (
        <WebView src={url} onMessage={this.handleMessage} />
    );
  }
}
