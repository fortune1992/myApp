import {CSSProperties} from "react";

export const homeStyle: {
  rootStyle: CSSProperties,
  backIcon: CSSProperties,
  titleStyle: CSSProperties,
} = {
  rootStyle: {
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
    background: '#fe3666'
  },
  backIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 10
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
