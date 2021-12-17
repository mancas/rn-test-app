import React from 'react'
import styles from './Screen.style'
import { normalizeStyles } from '../../../utils/index'
import Header, { HeaderOptions } from '../header/Header'
import { View } from 'react-native'

export interface ScreenProps {
  style: [] | {}
  headerOptions?: HeaderOptions
  header: boolean
  children: React.ReactNode
}

const Screen = ({ style, headerOptions, children, header }: ScreenProps) => {
  return (
    <View style={[styles.container, ...normalizeStyles(style)]}>
      {header && <Header options={headerOptions} />}
      {children}
    </View>
  )
}

Screen.defaultProps = {
  style: [],
  header: false,
}

export default React.memo(Screen)
