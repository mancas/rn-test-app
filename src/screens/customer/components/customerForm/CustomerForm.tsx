import { useFormikContext } from 'formik'
import React, { useRef } from 'react'
import { TextInput } from 'react-native'
import styles from './CustomerForm.style'
import * as Animatable from 'react-native-animatable'
import Input from 'src/components/atoms/input/Input'
import DatePicker from 'src/components/molecules/datePicker/DatePicker'
import Select from 'src/components/atoms/select/Select'
import { Customer } from 'src/modules/customer/reducer'

const CustomerForm = () => {
  const birthdateInputRef = useRef<TextInput>(null)
  const nameInputRef = useRef<TextInput>(null)
  const lastnameInputRef = useRef<TextInput>(null)
  const emailInputRef = useRef<TextInput>(null)
  const phoneInputRef = useRef<TextInput>(null)
  const dniInputRef = useRef<TextInput>(null)
  const addressInputRef = useRef<TextInput>(null)
  const cityInputRef = useRef<TextInput>(null)
  const stateInputRef = useRef<TextInput>(null)
  const countryInputRef = useRef<TextInput>(null)
  const postalCodeInputRef = useRef<TextInput>(null)

  const {
    values,
    touched,
    errors,
    setFieldValue,
    setFieldTouched,
    handleChange,
    handleBlur,
  } = useFormikContext<Customer>()

  return (
    <Animatable.View style={styles.container} animation="fadeIn">
      <DatePicker
        ref={birthdateInputRef}
        placeholder="Fecha de nacimiento"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={date => {
          setFieldValue('birthdate', date)
          birthdateInputRef?.current?.blur()
        }}
        onBlur={() => setFieldTouched('birthdate', true)}
        value={values?.birthdate}
        hasError={!!touched.birthdate && !!errors.birthdate}
        errorMessage={errors?.birthdate ?? ''}
      />

      <Select
        placeholder="Sexo cromosómico"
        onChange={option => {
          setFieldValue('sex', option)
          setTimeout(() => {
            setFieldTouched('sex', true)
          }, 400)
        }}
        value={values?.sex}
        hasError={!!touched.sex && !!errors.sex}
        errorMessage={errors?.sex ?? ''}
        defaultValue="Selecciona uno..."
        options={[
          {
            label: 'XX',
            value: 'XX',
          },
          {
            label: 'XY',
            value: 'XY',
          },
        ]}
      />

      <Input
        ref={nameInputRef}
        placeholder="Nombre"
        returnKeyType="next"
        autoCapitalize="none"
        autoComplete="name"
        textContentType="name"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values?.name}
        hasError={!!touched.name && !!errors.name}
        errorMessage={errors?.name ?? ''}
        onSubmitEditing={() => {
          lastnameInputRef?.current?.focus()
        }}
      />

      <Input
        ref={lastnameInputRef}
        placeholder="Apellidos"
        returnKeyType="next"
        autoCapitalize="none"
        textContentType="middleName"
        onChangeText={handleChange('lastname')}
        onBlur={handleBlur('lastname')}
        value={values?.lastname}
        hasError={!!touched.lastname && !!errors.lastname}
        errorMessage={errors?.lastname ?? ''}
        onSubmitEditing={() => {
          emailInputRef?.current?.focus()
        }}
      />

      <Input
        ref={emailInputRef}
        placeholder="Email"
        returnKeyType="next"
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values?.email}
        hasError={!!touched.email && !!errors.email}
        errorMessage={errors?.email ?? ''}
        onSubmitEditing={() => {
          phoneInputRef?.current?.focus()
        }}
      />

      <Input
        ref={phoneInputRef}
        placeholder="Teléfono"
        returnKeyType="next"
        autoComplete="tel"
        autoCapitalize="none"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={handleChange('phone')}
        onBlur={handleBlur('phone')}
        value={values?.phone}
        hasError={!!touched.phone && !!errors.phone}
        errorMessage={errors?.phone ?? ''}
        onSubmitEditing={() => {
          dniInputRef?.current?.focus()
        }}
      />

      <Input
        ref={dniInputRef}
        placeholder="DNI"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('dni')}
        onBlur={handleBlur('dni')}
        value={values?.dni}
        hasError={!!touched.dni && !!errors.dni}
        errorMessage={errors?.dni ?? ''}
        onSubmitEditing={() => {
          addressInputRef?.current?.focus()
        }}
      />

      <Input
        ref={addressInputRef}
        placeholder="Dirección"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('address.address')}
        onBlur={handleBlur('address.address')}
        value={values?.address?.address}
        hasError={!!touched.address?.address && !!errors.address?.address}
        errorMessage={errors?.address?.address ?? ''}
        onSubmitEditing={() => {
          cityInputRef?.current?.focus()
        }}
      />

      <Input
        ref={cityInputRef}
        placeholder="Ciudad"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('address.city')}
        onBlur={handleBlur('address.city')}
        value={values?.address?.city}
        hasError={!!touched.address?.city && !!errors.address?.city}
        errorMessage={errors?.address?.city ?? ''}
        onSubmitEditing={() => {
          stateInputRef?.current?.focus()
        }}
      />

      <Input
        ref={stateInputRef}
        placeholder="Provincia"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('address.state')}
        onBlur={handleBlur('address.state')}
        value={values?.address?.state}
        hasError={!!touched.address?.state && !!errors.address?.state}
        errorMessage={errors?.address?.state ?? ''}
        onSubmitEditing={() => {
          countryInputRef?.current?.focus()
        }}
      />

      <Input
        ref={countryInputRef}
        placeholder="País"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('address.country')}
        onBlur={handleBlur('address.country')}
        value={values?.address?.country}
        hasError={!!touched.address?.country && !!errors.address?.country}
        errorMessage={errors?.address?.country ?? ''}
        onSubmitEditing={() => {
          postalCodeInputRef?.current?.focus()
        }}
      />

      <Input
        ref={postalCodeInputRef}
        placeholder="Código postal"
        returnKeyType="next"
        autoCapitalize="none"
        onChangeText={handleChange('address.postalCode')}
        onBlur={handleBlur('address.postalCode')}
        value={values?.address?.postalCode}
        hasError={!!touched.address?.postalCode && !!errors.address?.postalCode}
        errorMessage={errors?.address?.postalCode ?? ''}
      />
    </Animatable.View>
  )
}

export default React.memo(CustomerForm)
