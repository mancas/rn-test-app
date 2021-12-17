import React from 'react'
import { View } from 'react-native'
import { AvailableColors } from 'res'
import Loader from 'src/components/atoms/loader/Loader'
import Text from 'src/components/atoms/text/Text'
import { normalizeStyles } from 'src/utils'
import styles from './LoadingView.style'

export interface LoadingViewProps {
  style?: [] | {}
  message?: string
}

const LoadingView = ({ style, message }: LoadingViewProps) => {
  return (
    <View style={[styles.container, ...normalizeStyles(style)]}>
      <Loader color={AvailableColors.primary} />
      {message && (
        <Text style={styles.headline} align="center">
          {message}
        </Text>
      )}
    </View>
  )
}

export default React.memo(LoadingView)
