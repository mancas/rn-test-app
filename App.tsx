import { useFlipper } from '@react-navigation/devtools'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { RootNavigator } from 'src/navigators'
import { RegisterCustomerProvider } from 'src/modules/customer'
import { PermissionsProvider } from 'src/contexts/permissions/usePermissions'

const App = () => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <PermissionsProvider>
        <RegisterCustomerProvider>
          <SafeAreaProvider>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <RootNavigator />
          </SafeAreaProvider>
        </RegisterCustomerProvider>
      </PermissionsProvider>
    </NavigationContainer>
  )
}

export default App
