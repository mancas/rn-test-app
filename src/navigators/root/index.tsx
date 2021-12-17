import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import styles from './index.style'
import { Home } from 'src/screens/home/Home'
import { RootStackParamList } from './types'
import { View } from 'react-native'
import { RegisterTubeNavigator } from '../registerTube'
import { headerOptions } from '../config'
import { RouteProp } from '@react-navigation/core'
import { Routes } from '../routes'

export type RootNavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>

export type RootRouteProp<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>

const authenticatedScreens = {
  [Routes.Home]: {
    screen: Home,
  },
  [Routes.RegisterTube]: {
    screen: RegisterTubeNavigator,
    options: {
      headerShown: false,
    },
  },
}

// Height is not supported but recommended when using custom header component

const RootStack = createNativeStackNavigator<RootStackParamList>()
export const RootNavigator = () => {
  const isLogged = true

  return (
    <View style={styles.wrapper}>
      <RootStack.Navigator screenOptions={headerOptions}>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          {Object.entries({
            // Use some screens conditionally based on some condition
            ...(isLogged ? authenticatedScreens : []),
            // Use the screens normally
          }).map(([name, { screen, ...rest }]) => (
            <RootStack.Screen
              key={name}
              name={name as keyof RootStackParamList}
              component={screen}
              {...rest}
            />
          ))}
        </RootStack.Group>
      </RootStack.Navigator>
    </View>
  )
}
