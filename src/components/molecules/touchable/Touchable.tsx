import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface TouchableProps extends TouchableOpacityProps {
  children: React.ReactNode
}

const Touchable = ({ children, activeOpacity, ...rest }: TouchableProps) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

Touchable.defaultProps = {
  activeOpacity: 0.6,
}

export default React.memo(Touchable)
