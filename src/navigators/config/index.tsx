import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors } from 'res'

export const headerOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerShadowVisible: false,
  headerTitle: '',
  title: '',
  headerTintColor: colors.black,
  // headerLeft: params => {
  //   console.info(params)
  //   return (
  //     params.canGoBack && (
  //       <HeaderBackButton
  //         {...params}
  //         backImage={() => <CustomHeaderBackButton />}
  //       />
  //     )
  //   )
  // },
}
