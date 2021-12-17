import React from 'react'
import { RNHole, RNHoleView } from 'react-native-hole-view'
import { normalizeStyles } from 'src/utils'
import { Dimensions, PixelRatio } from 'react-native'
import styles from './Overlay.style'

export interface OverlayProps {
  style?: [] | {}
  holes: RNHole[]
}

const { width, height } = Dimensions.get('screen')
const defaultHoleWidth = PixelRatio.roundToNearestPixel(width * 0.6)
const defaultHoleHeight = PixelRatio.roundToNearestPixel(width * 0.6)

const defaultHoles = [
  {
    x: PixelRatio.roundToNearestPixel(width / 2 - defaultHoleWidth / 2),
    y: PixelRatio.roundToNearestPixel(height / 2 - defaultHoleHeight / 2),
    width: defaultHoleWidth,
    height: defaultHoleHeight,
    borderRadius: PixelRatio.roundToNearestPixel(defaultHoleWidth * 0.2),
  },
]

const Overlay = ({ style, holes }: OverlayProps) => {
  return (
    <RNHoleView
      style={[styles.container, ...normalizeStyles(style)]}
      holes={holes}
    />
  )
}

Overlay.defaultProps = {
  holes: defaultHoles,
}

export default React.memo(Overlay)
