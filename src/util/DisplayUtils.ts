import Taro from '@tarojs/taro';
import { NavigationBarInfo } from '@/model/NavigationBarInfo';

let navigationBarInfo: NavigationBarInfo;

export const systemInfo = Taro.getSystemInfoSync();

export const screenHeight = systemInfo.screenHeight;
export const screenWidth = systemInfo.screenWidth;

export function getNavigationBarInfo(): NavigationBarInfo {
  if (navigationBarInfo != null) {
    return navigationBarInfo;
  }
  let menuButtonRect = Taro.getMenuButtonBoundingClientRect();
  let statusBarHeight = systemInfo.statusBarHeight || 0;
  let menuButtonHeight = menuButtonRect.height;
  let menuButtonTop = menuButtonRect.top;
  let menuButtonRight = menuButtonRect.width + systemInfo.screenWidth - menuButtonRect.right;
  let navBarHeight = statusBarHeight + menuButtonHeight + (menuButtonTop - statusBarHeight) * 2;

  return {
    navBarHeight,
    statusBarHeight: navBarHeight - menuButtonHeight,
    menuButtonRight,
  };
}