import React, { useMemo } from 'react'
import styles from './Loader.style'
import Spinner from 'react-native-spinkit'
import { AvailableColors } from 'res'
import { normalizeStyles } from 'src/utils/index'

export interface LoaderProps {
  style?: [] | {}
  size: number
  color: AvailableColors
}

const Loader = ({ style, size, color }: LoaderProps) => {
  const computedStyle = useMemo(() => {
    return {
      ...styles.spinner,
      ...normalizeStyles(style).reduce((groupedStyles, currentStyle) => {
        return {
          ...groupedStyles,
          ...currentStyle,
        }
      }, {}),
    }
  }, [style])

  return (
    <Spinner
      style={computedStyle}
      isVisible
      size={size}
      type="ThreeBounce"
      color={color}
    />
  )
}

Loader.defaultProps = {
  size: 40,
  color: AvailableColors.white,
}

export default React.memo(Loader)
