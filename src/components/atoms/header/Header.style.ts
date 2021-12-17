import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  back: {
    marginLeft: 6,
  },

  left: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftActions: {
    marginLeft: 18,
  },

  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 60,
    marginRight: 18,
  },

  transparent: {
    position: 'absolute',
    backgroundColor: 'red',
  },
})

export default styles
