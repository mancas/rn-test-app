import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import GrantedPermissionsScreen from 'src/screens/customer/tube/granted/GrantedPermissionsScreen'
import { RegisterTubeStackParamList } from './types'
import { headerOptions } from '../config'
import { RegisterTubeRoutes } from '../routes'
import { RouteProp } from '@react-navigation/core'

export type RegisterTubeNavigationProp<
  RouteName extends keyof RegisterTubeStackParamList,
> = NativeStackNavigationProp<RegisterTubeStackParamList, RouteName>

export type RegisterTubeRouteProp<
  RouteName extends keyof RegisterTubeStackParamList,
> = RouteProp<RegisterTubeStackParamList, RouteName>

const RegisterTubeStack =
  createNativeStackNavigator<RegisterTubeStackParamList>()
export const RegisterTubeNavigator = () => {
  return (
    <RegisterTubeStack.Navigator screenOptions={headerOptions}>
      <RegisterTubeStack.Screen
        name={RegisterTubeRoutes.CameraGrantedPermissions}
        component={GrantedPermissionsScreen}
      />
    </RegisterTubeStack.Navigator>
  )
}
