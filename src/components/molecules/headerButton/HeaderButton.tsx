import React from 'react'
import styles from './HeaderButton.style'
import Touchable, { TouchableProps } from '../touchable/Touchable'
import { normalizeStyles } from '../../../utils'
import { AvailableColors } from 'res'

export interface HeaderButtonProps extends TouchableProps {
  style?: [] | {}
  variant: AvailableColors
}

const HeaderButton = ({
  style,
  variant,
  onPress,
  disabled,
  children,
  ...rest
}: HeaderButtonProps) => {
  return (
    <Touchable
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        ...normalizeStyles(style),
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
      {...rest}>
      {children}
    </Touchable>
  )
}

HeaderButton.defaultProps = {
  variant: AvailableColors.transparent,
}

export default React.memo(HeaderButton)
