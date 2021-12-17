export enum AvailableColors {
  primary = 'primary',
  secondary = 'secondary',
  ntrl_dark = 'ntrl_dark',
  ntrl_light = 'ntrl_light',
  negative = 'negative',
  white = 'white',
  black = 'black',
  transparent = 'transparent',
}

type Color = {
  [key in AvailableColors]?: string
}

export const colors: Color = {
  primary: '#006ADB',
  secondary: '#F88729',
  ntrl_dark: '#9B9B9B',
  ntrl_light: '#F3F3F3',
  negative: '#E83E53',
  white: '#ffffff',
  black: '#565656',
  transparent: 'transparent',
}

export type Variants = {
  [key in AvailableColors]?: {
    color?: string
  }
}

export const generateColorVariants = (): Variants => {
  const variants: Variants = {}
  Object.keys(AvailableColors).forEach((colorKey: string) => {
    variants[colorKey as AvailableColors] = {
      color: colors[colorKey as AvailableColors],
    }
  })
  return variants
}
