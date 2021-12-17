import { StyleSheet } from 'react-native'
import { generateColorVariants } from 'res'

const styles = StyleSheet.create({
  text: {},

  xs: {
    fontSize: 12,
  },

  s: {
    fontSize: 16,
  },

  m: {
    fontSize: 18,
  },

  l: {
    fontSize: 24,
  },

  xl: {
    fontSize: 30,
  },

  xxl: {
    fontSize: 60,
    lineHeight: 60,
  },

  weight_400: {
    fontFamily: 'Montserrat-Regular',
  },

  weight_500: {
    fontFamily: 'Montserrat-Medium',
  },

  weight_600: {
    fontFamily: 'Montserrat-SemiBold',
  },

  weight_700: {
    fontFamily: 'Montserrat-Bold',
  },

  italic: {
    fontFamily: 'Montserrat-LightItalic',
  },

  left: {
    textAlign: 'left',
  },

  center: {
    textAlign: 'center',
  },

  right: {
    textAlign: 'right',
  },

  ...generateColorVariants(),
})

export default styles
