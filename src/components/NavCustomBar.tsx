import Taro from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import {Component} from 'react'
import {images} from "@/images";
import {homeStyle} from "@/styles/homeStyle";

interface IState {
  navBarHeight: number
  topHeight: number
}

interface IProps {
  needBackIcon?: boolean,
  mainTitle?: String
}

export default class NavCustomBar extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      navBarHeight: 0,
      topHeight: 0,
    }
  }

  componentDidMount() {
    this.getNavHeight()
  }

  getNavHeight() {
    let menuButtonObject = Taro.getMenuButtonBoundingClientRect();
    const sysinfo = Taro.getSystemInfoSync();
    let statusBarHeight = sysinfo.statusBarHeight || 0;
    let menuButtonHeight = menuButtonObject.height;
    let menuButtonTop = menuButtonObject.top;
    let navBarHeight = statusBarHeight + menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;
    this.setState({navBarHeight, topHeight: navBarHeight - menuButtonHeight})
  }

  goBackPage = () => {
    Taro.navigateTo({
      url: '/pages/minePage/index'
    })
  }

  render() {
    let {needBackIcon = true, mainTitle = ''} = this.props
    return (
      <View style={{height: `${this.state.navBarHeight}px`}}>
        <View style={{height: `${this.state.topHeight}px`}} />
        {needBackIcon &&
          <Image
            src={images.icBack}
            style={homeStyle.backIcon}
            onClick={this.goBackPage}
          />}
        <Text style={homeStyle.titleStyle}>{mainTitle}</Text>
      </View>
    )
  }
}
