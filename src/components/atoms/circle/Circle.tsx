import React, { useMemo } from 'react'
import { Svg, Circle as RNSVGCircle } from 'react-native-svg'
import { colors } from 'res'

export interface CircleProps {
  radius: number
  borderWidth: number
  borderColor: string
  backgroundColor: string
}

const Circle = ({
  radius,
  borderWidth,
  borderColor,
  backgroundColor,
}: CircleProps) => {
  const viewBox = useMemo(() => {
    return (radius + borderWidth) * 2
  }, [radius, borderWidth])

  return (
    <Svg width={viewBox} height={viewBox} viewBox={`0 0 ${viewBox} ${viewBox}`}>
      <RNSVGCircle
        r={radius}
        cx={viewBox / 2}
        cy={viewBox / 2}
        stroke={borderColor}
        strokeWidth={borderWidth}
        fill={backgroundColor}
      />
    </Svg>
  )
}

Circle.defaultProps = {
  borderWidth: 0,
  borderColor: colors.primary,
  backgroundColor: colors.primary,
}

export default React.memo(Circle)
