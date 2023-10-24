import './index.scss'
import {Component} from "react";
import ImageComponent from "@/pages/componentTestPage/component/ImageComponent";
import ImageAndTextComponent from "@/pages/componentTestPage/component/ImageAndTextComponent";
import ListComponent from "@/pages/componentTestPage/component/ListComponent";
import ScrollViewComponent from "@/pages/componentTestPage/component/ScrollViewComponent";
import InputComponent from "@/pages/componentTestPage/component/InputComponent";
import ClickComponent from "@/pages/componentTestPage/click/ClickComponent";

export default class ComponentTestPage extends Component {
    render() {
        return (
            // <ImageComponent />
            // <ImageAndTextComponent />
            <ScrollViewComponent />
            // <InputComponent />
            // <ClickComponent />
        )
    }
}
