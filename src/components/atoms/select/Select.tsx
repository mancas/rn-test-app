import React, { useCallback, useMemo } from 'react'
import { View } from 'react-native'
import styles from './Select.style'
import RNPickerSelect from 'react-native-picker-select'
import { InputProps } from '../input/Input'
import Text from '../text/Text'
import { normalizeStyles } from 'src/utils'
import { AvailableColors } from 'res'

export type SelectOption = {
  label: string
  value: string | number
}

export interface SelectProps
  extends Pick<
    InputProps,
    'style' | 'placeholder' | 'hasError' | 'errorMessage' | 'disabled' | 'value'
  > {
  defaultValue: string | number
  options: SelectOption[]
  onChange?: (value: Pick<SelectOption, 'value'>) => void
}

const Select = ({
  style,
  placeholder,
  hasError,
  errorMessage,
  value,
  defaultValue,
  options,
  onChange,
  disabled,
}: SelectProps) => {
  const handleOptionChange = useCallback(
    selectedOption => {
      onChange?.(selectedOption)
    },
    [onChange],
  )

  const inputStyles = useMemo(() => {
    let computedStyles: { [key: string]: any } = { ...styles.input }
    if (hasError) {
      computedStyles = {
        ...computedStyles,
        ...styles.inputError,
      }
    }
    return computedStyles
  }, [hasError])

  return (
    <View style={[styles.container, ...normalizeStyles(style)]}>
      <Text
        style={[styles.placeholder, hasError && styles.placeholderError]}
        weight="500">
        {placeholder}
      </Text>

      <RNPickerSelect
        style={{
          inputIOS: {
            ...inputStyles,
          },
          inputAndroid: {
            ...inputStyles,
          },
        }}
        placeholder={{ label: defaultValue, value: null }}
        value={value}
        onValueChange={handleOptionChange}
        items={options}
        disabled={disabled}
        useNativeAndroidPickerStyle={false}
      />

      {hasError && (
        <Text style={styles.errorMessage} variant={AvailableColors.negative}>
          {errorMessage}
        </Text>
      )}
    </View>
  )
}

export default React.memo(Select)
