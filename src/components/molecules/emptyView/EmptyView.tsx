import React from 'react'
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { images } from 'res'
import Text from 'src/components/atoms/text/Text'
import { normalizeStyles } from 'src/utils'
import styles from './EmptyView.style'

export interface EmptyViewProps {
  style?: [] | {}
  message?: string
}

export const EmptyView = ({ style, message }: EmptyViewProps) => {
  return (
    <Animatable.View
      style={[styles.container, ...normalizeStyles(style)]}
      animation="fadeIn">
      <Image
        style={styles.illustration}
        source={images.empty_state}
        resizeMode="contain"
      />

      {message && (
        <Text style={styles.message} align="center">
          {message}
        </Text>
      )}
    </Animatable.View>
  )
}
