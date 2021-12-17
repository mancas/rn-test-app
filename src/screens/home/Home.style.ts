import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  username: {
    marginLeft: 6,
  },

  welcome: {
    marginHorizontal: 18,
    width: '50%',
    paddingVertical: 12,
  },

  callToAction: {
    marginHorizontal: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  illustration: {
    height: 80,
    width: 80,
    marginRight: 12,
  },

  decorator: {
    position: 'absolute',
    bottom: -12,
    right: 12,
    width: 48,
    height: 66,
  },

  callToActionContent: {
    flex: 1,
    paddingRight: 80,
  },

  content: {
    marginTop: 24,
  },
})

export default styles
