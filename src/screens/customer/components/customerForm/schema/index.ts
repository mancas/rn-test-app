import { string, object } from 'yup'

const schema = object().shape({
  birthdate: string().ensure().required('Debes añadir la fecha de nacimiento'),
  sex: string().ensure().required('Debes añadir el sexo'),
  name: string().ensure().required('Debes añadir el nombre'),
  lastname: string().ensure().required('Debes añadir los apellidos'),
  email: string().ensure().required('Debes añadir el email'),
  phone: string().ensure().required('Debes añadir el teléfono'),
  dni: string().ensure().required('Debes añadir el DNI'),
  address: object().shape({
    address: string().ensure().required('Debes añadir la dirección'),
    city: string().ensure().required('Debes añadir la ciudad'),
    state: string().ensure().required('Debes añadir el estado'),
    country: string().ensure().required('Debes añadir el país'),
    postalCode: string().ensure().required('Debes añadir el código postal'),
  }),
})

export default schema
