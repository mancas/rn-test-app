import React, { useMemo } from 'react'
import { View, Dimensions } from 'react-native'
import styles from './CurveView.style'
import Circle from '../../atoms/circle/Circle'
import { colors } from 'res'
import { normalizeStyles } from 'src/utils'

export interface CurveViewProps {
  style: [] | {}
  color: string
  children?: React.ReactElement
}

const CurveView = ({ style, color, children }: CurveViewProps) => {
  const curveRadius = useMemo(() => {
    const { width: viewportWidth } = Dimensions.get('window')
    return viewportWidth
  }, [])

  return (
    <View style={[styles.container, ...normalizeStyles(style)]}>
      <View style={[styles.curveWrapper]}>
        <View style={styles.curveView}>
          <Circle radius={curveRadius} backgroundColor={color} />
        </View>
      </View>
      {React.isValidElement(children) && children}
    </View>
  )
}

CurveView.defaultProps = {
  style: [],
  color: colors.white,
}

export default React.memo(CurveView)
