import { StyleSheet } from 'react-native'
import { AvailableColors, colors } from 'res'

type ButtonVariants = {
  [key in AvailableColors]?: {
    backgroundColor?: string
    borderColor?: string
  }
}

export const generateColorVariants = (): ButtonVariants => {
  const variants: ButtonVariants = {}
  Object.keys(AvailableColors).forEach((colorKey: string) => {
    variants[colorKey as AvailableColors] = {
      backgroundColor: colors[colorKey as AvailableColors],
      borderColor: colors[colorKey as AvailableColors],
    }
  })
  return variants
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
  },

  disabled: {
    opacity: 0.5,
  },

  ...generateColorVariants(),
})

export default styles
