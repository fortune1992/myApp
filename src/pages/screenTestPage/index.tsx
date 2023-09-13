import './index.scss'
import {Component} from "react";
import FixedLayout from "@/pages/screenTestPage/components/FixedLayout";
import PercentageDimensionsBasics from "@/pages/screenTestPage/components/PercentageDimensionsBasics";
import FlexLayout from "@/pages/screenTestPage/components/FlexLayout";

export default class ScreenTestPage extends Component {
  render() {
    // return <FixedLayout />
    // return <PercentageDimensionsBasics />
    return <FlexLayout />
  }
}
