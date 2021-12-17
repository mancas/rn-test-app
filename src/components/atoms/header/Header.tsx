import React, { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import styles from './Header.style'
import IconFeather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import HeaderButton from '../../molecules/headerButton/HeaderButton'
import { colors } from 'res'
import { normalizeStyles } from 'src/utils'

export interface HeaderOptions {
  isBackEnabled?: boolean
  headerTransparent?: boolean
  variant?: 'dark-content' | 'light-content'
  renderLeftActions?: (props?: any) => React.ReactNode
  renderRightActions?: (props?: any) => React.ReactNode
}

export interface HeaderProps {
  style: [] | {}
  options: HeaderOptions
}

const defaultOptions = {
  isBackEnabled: false,
  variant: 'dark-content',
}

const Header = ({ style, options }: HeaderProps) => {
  const navigation = useNavigation()
  const headerOptions = useMemo(() => {
    return {
      ...defaultOptions,
      ...(options ?? {}),
    }
  }, [options])

  const goBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const iconColor = useMemo(() => {
    return headerOptions.variant === 'dark-content'
      ? colors.black
      : colors.white
  }, [headerOptions])

  const shouldRenderBackButton = useMemo(() => {
    if (!headerOptions?.renderLeftActions) {
      return !!headerOptions?.isBackEnabled
    }
    return false
  }, [headerOptions?.isBackEnabled, headerOptions?.renderLeftActions])

  return (
    <View
      style={[
        styles.container,
        headerOptions?.headerTransparent && styles.transparent,
        ...normalizeStyles(style),
      ]}>
      <View style={styles.left}>
        {shouldRenderBackButton && (
          <HeaderButton style={styles.back} onPress={goBack}>
            <IconFeather name="arrow-left" size={24} color={iconColor} />
          </HeaderButton>
        )}
        <View style={styles.leftActions}>
          {headerOptions.renderLeftActions?.()}
        </View>
      </View>

      {headerOptions.renderRightActions && (
        <View style={styles.rightActions}>
          {headerOptions.renderRightActions?.()}
        </View>
      )}
    </View>
  )
}

Header.defaultProps = {
  style: [],
  options: defaultOptions,
}

export default React.memo(Header)
