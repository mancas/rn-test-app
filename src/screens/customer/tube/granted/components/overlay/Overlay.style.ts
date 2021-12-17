import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { colors } from 'res'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: transparentize(0.5, colors.black ?? '#000000'),
  },
})

export default styles
