import React, { ReactNode, useContext, useReducer } from 'react'
import { initialState, reducer, RegisterCustomerState } from './reducer'

const RegisterCustomerContext = React.createContext([initialState, {}])

export type RegisterCustomerProviderProps = {
  children: ReactNode
}

export type RegisterCustomerFunctions = {}

export const RegisterCustomerProvider = ({
  children,
}: RegisterCustomerProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <RegisterCustomerContext.Provider value={[state, {}]}>
      {children}
    </RegisterCustomerContext.Provider>
  )
}

export const useRegisterCustomer = (): [
  RegisterCustomerState,
  RegisterCustomerFunctions,
] => {
  const ctx = useContext(RegisterCustomerContext)
  if (!ctx) {
    throw Error(
      'The `useAuth` hook must be called from a descendent of the `AuthProvider`.',
    )
  }
  return ctx as [RegisterCustomerState, RegisterCustomerFunctions]
}
