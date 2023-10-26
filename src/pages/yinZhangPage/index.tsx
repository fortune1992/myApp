import { View, Button, Canvas } from '@tarojs/components'
import './index.scss'
import { Component } from 'react';
import Taro from '@tarojs/taro';
import { getNoWatermarkVideoUrl } from '@/util/ttVideoUtils';

export default class YinZhangPage extends Component {

  render() {
    return (
      <View className='yinZhangPage'>
        <Canvas type='2d' className='circleBar' id='circleBar' canvasId='circleBar' />
        <Button className='make' onClick={this.generateYinZhang}>generate</Button>
      </View>
    )
  }

  private generateYinZhang = async () => {
    // const id = await getId("https://v.douyin.com/iecXFyja/")
    const res = await getNoWatermarkVideoUrl("https://v.douyin.com/iecXFyja/")
    return;
    const opts = {
      company: '西安饭乐科技有限公司', // 机构名称
      companyTight: false, // 公司名称是否紧凑(//false 散开型   true紧凑)
      name: '专用章'
    }
    Taro.nextTick(() => {
      Taro.createSelectorQuery()
        .select('#circleBar')
        .fields({
          node: true,
          size: true
        }, (res) => {
          console.log(res)
          const canvas = res.node;
          const context = canvas.getContext('2d');
          context.fillStyle = 'rgba(255, 255, 255, 0)';

          // 绘制印章边框
          canvas.width = res.width
          canvas.height = res.height
          const width = canvas.width / 2;
          const height = canvas.height / 2;
          context.lineWidth = 3;
          context.strokeStyle = "#f00";
          context.beginPath();
          context.arc(width, height, 78, 0, Math.PI * 2);
          context.stroke();
          context.save();

          //画五角星
          context.save();
          context.fillStyle = "#f00";
          context.translate(width, height);//移动坐标原点
          context.rotate(Math.PI);//旋转
          context.beginPath();//创建路径
          let x = Math.sin(0);
          let y = Math.cos(0);
          const dig = Math.PI / 5 * 4;
          for (let i = 0; i < 5; i++) {//画五角星的五条边
            x = Math.sin(i * dig);
            y = Math.cos(i * dig);
            context.lineTo(x * 25, y * 25);
          }
          context.closePath();
          context.stroke();
          context.fill();
          context.restore();
          // 绘制印章名称
          context.font = '18px Helvetica';
          context.textBaseline = 'middle';//设置文本的垂直对齐方式
          context.textAlign = 'center'; //设置文本的水平对对齐方式
          context.lineWidth = 1;
          context.fillStyle = '#f00';
          context.fillText(opts.name, width, height + 53);

          // 绘制印章单位
          context.translate(width, height);// 平移到此位置,
          const count = opts.company.length;// 字数
          let angle;
          let maxCount;
          if (count > 14) {
            maxCount = 18;
            context.font = '16px Helvetica'
            if (opts.companyTight) {
              angle = 4 * Math.PI / 51;// 字间角度
            } else {
              angle = 4 * Math.PI / (3 * (count - 1));// 字间角度
            }
          } else {
            maxCount = 14;
            context.font = '20px Helvetica'
            if (opts.companyTight) {
              angle = 4 * Math.PI / 39;// 字间角度
            } else {
              angle = 4 * Math.PI / (3 * (count - 1));// 字间角度
            }
          }
          const chars = opts.company.split("");
          for (let i = 0; i < count; i++) {
            let c = chars[i];// 需要绘制的字符
            if (i == 0) {
              if (opts.companyTight) {
                context.rotate(5 * Math.PI / 6 + angle * ((maxCount - count) / 2));
              } else {
                context.rotate(5 * Math.PI / 6);
              }
            } else {
              context.rotate(angle);
            }
            context.save();
            context.translate(64, 0);// 平移到此位置,此时字和x轴垂直
            context.rotate(Math.PI / 2);// 旋转90度,让字平行于x轴
            context.fillText(c, 0, 5);// 此点为字的中心点
            context.restore();
          }
        })
        .exec()
    })
  }
}
