import { StyleSheet } from 'react-native'
import { AvailableColors, colors } from 'res'

type HeaderButtonVariants = {
  [key in AvailableColors]?: {
    borderColor?: string
  }
}

export const generateColorVariants = (): HeaderButtonVariants => {
  const variants: HeaderButtonVariants = {}
  Object.keys(AvailableColors).forEach((colorKey: string) => {
    variants[colorKey as AvailableColors] = {
      borderColor: colors[colorKey as AvailableColors],
    }
  })
  return variants
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    borderWidth: 1.5,
  },

  ...generateColorVariants(),

  disabled: {
    opacity: 0.4,
  },
})

export default styles
