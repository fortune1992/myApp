import {Component} from "react";
import {Text} from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";

export default class ListComponent extends Component {

    buildData = (offset = 0) => {
        return Array(100).fill(0).map((_, i) => i + offset);
    }

    Row = ({id, index, data}) => {
        return (
            <Text id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
                Row {index} : {data[index]}
            </Text>
        )
    }
    render() {
        const data = this.buildData(0)
        const dataLen = data.length
        return (
            <VirtualList
              style={{width: '100vh', height: '100vh'}}
              layout='vertical'
              enhanced
              height={500}
              width='100%'
              itemData={data}
              itemCount={dataLen}
              itemSize={30}
              item={this.Row}
            />
        );
    }
}
