import { View, Button } from '@tarojs/components'
import './index.scss'
import { Component } from 'react';
import Taro from '@tarojs/taro';

interface IState {
  exportPath: string;
}

export default class VideoTest extends Component<{}, IState> {

  constructor(props) {
    super(props);
    this.state = { exportPath: "" }
  }

  render() {
    return (
      <View className='videoTest'>
        <Button onClick={this.chooseVideo}>chooseVideo</Button>
        <Button onClick={this.exportVideo}>export</Button>
      </View>
    )
  }

  private chooseVideo = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ['video'],
      sourceType: ['album'],
      sizeType: ['original'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath
        console.log("tempFilePath", res)
        const fsm = Taro.getFileSystemManager()
        const videoPath = Taro.env.USER_DATA_PATH + "/test.mp4"
        fsm.copyFileSync(tempFilePath, videoPath)
        fsm.appendFileSync(videoPath, Date.now().toString(), 'utf8')
        this.setState({ exportPath: videoPath })
      },
      complete: (res) => {
        console.log(JSON.stringify(res))
      }
    })
  }

  private exportVideo = () => {
    Taro.saveVideoToPhotosAlbum({
      filePath: this.state.exportPath,
      success: (res) => {
        console.log("pengguolong", "exportVideo: " + res)
      }
    })
  }
}
