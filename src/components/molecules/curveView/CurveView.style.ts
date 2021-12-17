import { StyleSheet, Dimensions } from 'react-native'

const { width: viewportWidth } = Dimensions.get('window')

const wrapperHeight = (viewportWidth * 30) / 100

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },

  curveWrapper: {
    alignSelf: 'center',
    width: viewportWidth,
    height: 60,
    overflow: 'hidden',
  },

  curveView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  curveViewContent: {
    width: viewportWidth,
    paddingTop: (wrapperHeight * 1) / 3,
  },
})

export default styles
