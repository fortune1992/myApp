import {Component} from "react";
import {Text} from "@tarojs/components";

// 错误边界页面
// 使用 HOC 以方便为各个页面复用这段逻辑
export function createErrorBoundary(Page) {
    return class ErrorBoundary extends Component {
        state = {
            hasError: null,
        }

        static getDerivedStateFromError() {
            return {
                hasError: true,
            }
        }

        componentDidCatch(error, errorInfo) {
            console.log(error, errorInfo)
        }

        render() {
            if (this.state.hasError) {
                return <Text style={{color: "black"}}>Something went wrong.</Text>
            } else {
                return <Page />
            }
        }
    }
}

