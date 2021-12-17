import React from 'react'
import HeaderButton from '../headerButton/HeaderButton'
import IconFeather from 'react-native-vector-icons/Feather'
import { normalizeStyles } from 'src/utils'
import { useNavigation } from '@react-navigation/core'
import { colors } from 'res'
import styles from './HeaderBackButton.style'

export interface HeaderBackButtonProps {
  style?: [] | {}
}

const HeaderBackButton = ({ style }: HeaderBackButtonProps) => {
  const navigation = useNavigation()
  return (
    <HeaderButton
      style={[styles.button, ...normalizeStyles(style)]}
      onPress={navigation.goBack}>
      <IconFeather name="arrow-left" size={24} color={colors.black} />
    </HeaderButton>
  )
}

export default React.memo(HeaderBackButton)
