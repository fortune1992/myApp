import './index.scss'
import {Component} from "react";
import FlexTestLayout from "@/pages/flexTestPage/components/FlexTestLayout";
import JustifyContentLayout from "@/pages/flexTestPage/components/JustifyContentLayout";
import FlexDirectionLayout from "@/pages/flexTestPage/components/flexDirection/FlexDirectionLayout";
import AlignItemsLayout from "@/pages/flexTestPage/components/alignItems/AlignItemsLayout";

export default class FlexTestPage extends Component {
  render() {
    return (
       // <FlexTestLayout />
       //  <JustifyContentLayout />
       //  <FlexDirectionLayout />
        <AlignItemsLayout />
    )
  }
}
