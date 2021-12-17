import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { Platform, TextInput } from 'react-native'
import Input, { InputProps } from 'src/components/atoms/input/Input'
import DateTimePicker from '@react-native-community/datetimepicker'
import { DateTime } from 'luxon'

export interface DatePickerProps extends InputProps {
  value: string | undefined
}

const DatePicker = forwardRef<TextInput, DatePickerProps>(
  ({ onChangeText, onFocus, onBlur, onSubmitEditing, value, ...rest }, ref) => {
    const [isDatePickerOpened, setIsDatePickerOpened] = useState(false)

    const handleFocus = useCallback(
      evt => {
        setIsDatePickerOpened(true)
        onFocus?.(evt)
      },
      [onFocus],
    )

    const handleBlur = useCallback(
      evt => {
        setIsDatePickerOpened(false)
        onBlur?.(evt)
      },
      [onBlur],
    )

    const handleSubmitEditing = useCallback(
      evt => {
        setIsDatePickerOpened(false)
        onSubmitEditing?.(evt)
      },
      [onSubmitEditing],
    )

    const handleChange = useCallback(
      (evt, selectedDate) => {
        if (!selectedDate) {
          handleBlur(evt)
          onSubmitEditing?.(evt)
          return
        }
        handleBlur(evt)
        onSubmitEditing?.(evt)
        onChangeText?.(selectedDate.toISOString())
      },
      [onChangeText, handleBlur, onSubmitEditing],
    )

    const sanitizedValue = useMemo(() => {
      if (!value) {
        return ''
      }
      return DateTime.fromISO(value).toLocaleString(DateTime.DATE_SHORT)
    }, [value])

    return (
      <>
        <Input
          ref={ref}
          value={sanitizedValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={handleSubmitEditing}
          {...rest}
        />
        {isDatePickerOpened && (
          <DateTimePicker
            testID="dateTimePicker"
            value={value ? new Date(value) : new Date()}
            mode="date"
            display={Platform.OS === 'android' ? 'calendar' : 'default'}
            onChange={handleChange}
          />
        )}
      </>
    )
  },
)

DatePicker.displayName = 'DatePicker'

DatePicker.defaultProps = {}

export default DatePicker
