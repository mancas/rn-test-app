import React from 'react'
import { View } from 'react-native'
import { normalizeStyles } from 'src/utils'

export interface GapProps {
  style: [] | {}
  space: number
}

const Gap = ({ style, space }: GapProps) => {
  return <View style={[{ marginRight: space }, ...normalizeStyles(style)]} />
}

Gap.defaultProps = {
  space: 12,
}

export default React.memo(Gap)
