import React, { useMemo } from 'react'
import { View } from 'react-native'
import { AvailableColors } from 'res'
import Text from 'src/components/atoms/text/Text'
import { normalizeStyles } from 'src/utils/index'
import styles from './Avatar.style'

export interface AvatarProps {
  style?: [] | {}
  name: string
  size: 's' | 'm' | 'l'
}

const Avatar = ({ style, name, size }: AvatarProps) => {
  const firstLetter = useMemo(() => {
    return name.charAt(0)?.toUpperCase() ?? 'U'
  }, [name])

  const mappedSizeToTextSize = useMemo(() => {
    switch (size) {
      case 's':
        return 's'

      case 'm':
        return 'm'

      case 'l':
        return 'xxl'
    }
  }, [size])

  return (
    <View style={[styles.container, styles[size], ...normalizeStyles(style)]}>
      <Text
        size={mappedSizeToTextSize}
        variant={AvailableColors.black}
        weight="600">
        {firstLetter}
      </Text>
    </View>
  )
}

Avatar.defaultProps = {
  size: 's',
}

export default React.memo(Avatar)
