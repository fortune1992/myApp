import './index.scss'
import {Component} from "react";
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
