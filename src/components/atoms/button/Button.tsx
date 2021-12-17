import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './Button.style'
import { normalizeStyles } from '../../../utils/index'
import Text from '../text/Text'
import { AvailableColors } from 'res'

export interface ButtonProps extends TouchableOpacityProps {
  style: [] | {}
  variant: AvailableColors
  textVariant: AvailableColors
  children: React.ReactElement | string
  isBusy: boolean
  disabled: boolean
}

const Button = ({
  style,
  variant,
  textVariant,
  children,
  isBusy,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.container,
        styles[variant],
        disabled && styles.disabled,
        ...normalizeStyles(style),
      ]}
      disabled={disabled}
      {...rest}>
      {!isBusy && (
        <Text weight="500" variant={textVariant}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  style: [],
  variant: AvailableColors.primary,
  textVariant: AvailableColors.white,
  isBusy: false,
  disabled: false,
}

export default React.memo(Button)
