import { ParamListBase } from '@react-navigation/routers'
import { Customer } from 'src/modules/customer/reducer'
import { Routes } from '../routes'

interface SubNavigator<T extends ParamListBase, K extends keyof T> {
  screen: K
  params?: T[K]
}

export type RootStackParamList = {
  [Routes.SignIn]: undefined
  [Routes.Home]: undefined
  [Routes.AddCustomer]: undefined
  [Routes.EditCustomer]: {
    customer: Customer
  }
  [Routes.RegisterTube]: undefined
  [Routes.Profile]: undefined
}
