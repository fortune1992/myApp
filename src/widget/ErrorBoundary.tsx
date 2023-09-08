import React, {Component} from "react";
import {Text} from "@tarojs/components";

// 错误边界页面
// 使用 HOC 以方便为各个页面复用这段逻辑
export function createErrorBoundary(Page) {
    return class ErrorBoundary extends Component {
        el = React.createRef()
        state = {
            hasError: false,
        }

        // getDerivedStateFromError 更适合在渲染过程中捕获错误并更新组件状态，
        // componentDidCatch 更适合在错误发生后执行一些副作用操作。
        // 通常，建议同时在错误边界组件中实现这两个方法来提供更好的错误处理和用户体验。
        static getDerivedStateFromError() {
            return {
                hasError: true,
            }
        }

        componentDidCatch(error, errorInfo) {
            console.error(error, errorInfo)
        }

        /* Start 需要手动调用页面组件上的生命周期方法 **/
        componentDidShow() {
            // @ts-ignore
            return this.el.current?.componentDidShow?.()
        }

        componentDidHide() {
            // @ts-ignore
            return this.el.current?.componentDidHide?.()
        }

        onShareAppMessage() {
            // @ts-ignore
            return this.el.current?.onShareAppMessage?.()
        }

        //...

        /* End 需要手动调用页面组件上的生命周期方法 **/

        render() {
            if (this.state.hasError) {
                return <Text style={{color: "black"}}>Something went wrong.</Text>
            } else {
                return <Page ref={this.el} />
            }
        }
    }
}
