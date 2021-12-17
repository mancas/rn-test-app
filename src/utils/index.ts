export const normalizeStyles = (style: [] | {} | undefined) => {
  if (!style) {
    return []
  }

  if (Array.isArray(style)) {
    return style
  }

  return [style]
}
