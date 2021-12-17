import React from 'react'
import { Image } from 'react-native'
import { images } from 'res'
import { normalizeStyles } from 'src/utils'
import styles from './Logo.style'

export interface LogoProps {
  style: [] | {}
  size: 's' | 'm' | 'l'
  variant: 'light' | 'dark'
}

const Logo = ({ style, size, variant }: LogoProps) => {
  return (
    <Image
      style={[styles.logo, styles[size], ...normalizeStyles(style)]}
      source={variant === 'light' ? images.white_logo : images.white_logo}
    />
  )
}

Logo.defaultProps = {
  style: [],
  size: 'm',
  variant: 'dark',
}

export default React.memo(Logo)
