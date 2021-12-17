import React from 'react'
import { TouchableOpacityProps, ViewProps } from 'react-native'
import { AvailableColors } from 'res'
import Touchable from 'src/components/molecules/touchable/Touchable'
import { normalizeStyles } from 'src/utils'
import styles from './Card.style'

export interface CardProps
  extends Partial<ViewProps>,
    Partial<TouchableOpacityProps> {
  style?: [] | {}
  children: React.ReactNode
  variant?: AvailableColors
}

const Card = ({ style, variant, children, onPress, ...rest }: CardProps) => {
  return (
    <Touchable
      style={[
        styles.container,
        variant && styles[variant],
        ...normalizeStyles(style),
      ]}
      activeOpacity={onPress ? 0.6 : 1}
      onPress={onPress}
      {...rest}>
      {children}
    </Touchable>
  )
}

export default React.memo(Card)
