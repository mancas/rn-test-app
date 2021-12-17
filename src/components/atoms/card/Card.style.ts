import { StyleSheet, Platform } from 'react-native'
import { AvailableColors, colors } from 'res'

type CardVariants = {
  [key in AvailableColors]?: {
    backgroundColor?: string
  }
}

export const generateColorVariants = (): CardVariants => {
  const variants: CardVariants = {}
  Object.keys(AvailableColors).forEach((colorKey: string) => {
    variants[colorKey as AvailableColors] = {
      backgroundColor: colors[colorKey as AvailableColors],
    }
  })
  return variants
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.white,
    borderRadius: 6,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },

  ...generateColorVariants(),
})

export default styles
