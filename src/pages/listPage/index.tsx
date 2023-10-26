import {Text} from '@tarojs/components'
import VirtualList from '@tarojs/components/virtual-list'
import './index.scss'

export default function ListPage() {

    const buildData = (offset = 0) => {
        return Array(100).fill(0).map((_, i) => i + offset);
    }

    const Row = ({id, index, data}) => {
        return (
            <Text id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
                Row {index} : {data[index]}
            </Text>
        )
    }

    const data = buildData(0)
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
          item={Row}
        />
    );
}
