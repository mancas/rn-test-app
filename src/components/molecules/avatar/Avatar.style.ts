import { StyleSheet } from 'react-native'
import { colors } from 'res'

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    backgroundColor: colors.ntrl_light,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  s: {
    width: 40,
    height: 40,
    borderRadius: 18,
  },

  m: {
    width: 60,
    height: 60,
    borderRadius: 24,
  },

  l: {
    width: 108,
    height: 108,
    borderRadius: 32,
  },
})

export default styles
