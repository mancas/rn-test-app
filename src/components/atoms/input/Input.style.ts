import { StyleSheet } from 'react-native'
import { colors } from 'res'

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  input: {
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.ntrl_dark,
    borderRadius: 6,
    backgroundColor: colors.white,
    height: 48,
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },

  placeholder: {
    marginBottom: 6,
  },

  placeholderError: {
    color: colors.negative,
  },

  inputError: {
    borderColor: colors.negative,
  },

  errorMessage: {
    marginTop: 6,
  },

  multiline: {
    paddingTop: 18,
    paddingBottom: 18,
    height: 160,
  },
})

export default styles
