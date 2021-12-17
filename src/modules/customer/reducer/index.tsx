export enum ACTIONS {
  SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA',
  SET_TUBE_REFERENCE = 'SET_TUBE_REFERENCE',
  CLEAR = 'CLEAR',
}

export type Address = {
  address: string
  city: string
  state: string
  country: string
  postalCode: string
}

export type Customer = {
  birthdate: string
  sex: string
  name: string
  lastname: string
  email: string
  phone: string
  dni: string
  address: Address
}

export type RegisterCustomerState = {
  customer: Customer
  tube: string
}

type Action = {
  type: ACTIONS
  payload?: Partial<RegisterCustomerState>
}

export const initialState: RegisterCustomerState = {
  customer: {
    birthdate: '',
    sex: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    dni: '',
    address: {
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: '',
    },
  },
  tube: '',
}

export const reducer = (
  prevState: RegisterCustomerState,
  { type, payload }: Action,
): RegisterCustomerState => {
  switch (type) {
    case ACTIONS.SET_CUSTOMER_DATA:
      if (!payload?.customer) {
        return prevState
      }
      return {
        ...prevState,
        customer: {
          ...payload?.customer,
        },
      }

    case ACTIONS.SET_TUBE_REFERENCE:
      return {
        ...prevState,
        tube: payload?.tube ?? '',
      }

    case ACTIONS.CLEAR:
      return {
        ...initialState,
      }

    default:
      return prevState
  }
}
