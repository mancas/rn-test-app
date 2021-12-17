import React from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'
import { AvailableColors } from 'res'
import { normalizeStyles } from 'src/utils'
import styles from './Text.style'

export interface TextProps extends RNTextProps {
  style: [] | {}
  variant: AvailableColors
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  weight: '400' | '500' | '600' | '700'
  italic?: boolean
  align: 'left' | 'center' | 'right'
  children: React.ReactElement | string
}

const Text = ({
  style,
  variant,
  size,
  weight,
  align,
  italic,
  children,
  ...rest
}: TextProps) => {
  return (
    <RNText
      style={[
        styles.text,
        styles[variant],
        styles[`weight_${weight}`],
        styles[size],
        styles[align],
        italic && styles.italic,
        ...normalizeStyles(style),
      ]}
      {...rest}>
      {children}
    </RNText>
  )
}

Text.defaultProps = {
  style: [],
  variant: AvailableColors.black,
  size: 'm',
  weight: '400',
  align: 'left',
  italic: false,
}

export default React.memo(Text)
