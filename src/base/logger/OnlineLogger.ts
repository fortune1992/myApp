import { ILogger } from '@/base/logger/ILogger';
import Taro from '@tarojs/taro';

export class OnlineLogger implements ILogger {
  debug(...data: any[]): void {
    Taro.getLogManager().debug(data);
  }

  error(...data: any[]): void {
    // 错误日志实时上传
    Taro.getRealtimeLogManager().error(data);
  }

  info(...data: any[]): void {
    Taro.getLogManager().info(data);
  }

  log(...data: any[]): void {
    Taro.getLogManager().log(data);
  }

  warn(...data: any[]): void {
    Taro.getLogManager().warn(data);
  }

}