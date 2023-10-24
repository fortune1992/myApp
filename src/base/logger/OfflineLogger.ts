import { ILogger } from '@/base/logger/ILogger';

export class OfflineLogger implements ILogger {
  debug(...data: any[]): void {
    console.debug(data);
  }

  error(...data: any[]): void {
    console.error(data);
  }

  info(...data: any[]): void {
    console.info(data);
  }

  warn(...data: any[]): void {
    console.warn(data);
  }

  log(...data: any[]): void {
    console.log(data);
  }
}