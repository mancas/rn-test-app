import React, { forwardRef, useCallback, useMemo } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'
import { AvailableColors, colors } from 'res'
import { normalizeStyles } from 'src/utils'
import Text from '../text/Text'
import styles from './Input.style'
import { transparentize } from 'polished'

export interface InputProps extends TextInputProps {
  style?: [] | {}
  selectionColor?: string
  disabled?: boolean
  hasError: boolean
  errorMessage: string
  placeholder: string
  onFocus?: (evt: any) => void
  onBlur?: (evt: any) => void
  editable?: boolean
  multiline?: boolean
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      style,
      selectionColor,
      disabled,
      editable,
      hasError,
      multiline,
      errorMessage,
      placeholder,
      value,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const inputStyles = useMemo(() => {
      const computedStyles: [{ [key: string]: any }] = [styles.input]
      if (hasError) {
        computedStyles.push(styles.inputError)
      }
      if (multiline) {
        computedStyles.push(styles.multiline)
      }
      return computedStyles
    }, [hasError, multiline])

    const handleFocus = useCallback(
      evt => {
        onFocus?.(evt)
      },
      [onFocus],
    )

    const handleBlur = useCallback(
      evt => {
        onBlur?.(evt)
      },
      [onBlur],
    )

    const isEditable = useMemo(() => {
      if (disabled) {
        return false
      }
      return editable
    }, [disabled, editable])

    return (
      <View style={[styles.container, ...normalizeStyles(style)]}>
        <Text
          style={[styles.placeholder, hasError && styles.placeholderError]}
          weight="500">
          {placeholder}
        </Text>
        <TextInput
          ref={ref}
          style={inputStyles}
          editable={isEditable}
          selectionColor={selectionColor}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />

        {hasError && (
          <Text style={styles.errorMessage} variant={AvailableColors.negative}>
            {errorMessage}
          </Text>
        )}
      </View>
    )
  },
)

Input.displayName = 'Input'

Input.defaultProps = {
  style: [],
  autoCapitalize: 'sentences',
  keyboardType: 'default',
  returnKeyType: 'done',
  secureTextEntry: false,
  editable: true,
  underlineColorAndroid: 'transparent',
  multiline: false,
  selectionColor: transparentize(0.5, colors.primary ?? '#000000'),
}

export default Input
