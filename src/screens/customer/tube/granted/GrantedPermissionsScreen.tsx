import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { StatusBar } from 'react-native'
import styles from './GrantedPermissionsScreen.style'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import LoadingView from 'src/components/molecules/loadingView/LoadingView'
import Screen from 'src/components/atoms/screen/Screen'
import HeaderButton from 'src/components/molecules/headerButton/HeaderButton'
import { AvailableColors, colors } from 'res'
import IconFeather from 'react-native-vector-icons/Feather'
import Overlay from './components/overlay/Overlay'
import { CompositeNavigationProp } from '@react-navigation/core'
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner'
import { RegisterTubeRoutes, Routes } from 'src/navigators/routes'
import { RegisterTubeNavigationProp } from 'src/navigators/registerTube'
import { RootNavigationProp } from 'src/navigators'

// const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera)

export interface GrantedPermissionsProps {
  navigation: CompositeNavigationProp<
    RegisterTubeNavigationProp<RegisterTubeRoutes.CameraGrantedPermissions>,
    RootNavigationProp<Routes.AddCustomer>
  >
}

const GrantedPermissionsScreen = ({ navigation }: GrantedPermissionsProps) => {
  const [hasPermission, setHasPermission] = useState(false)
  const devices = useCameraDevices()
  const device = useMemo(() => {
    return devices.back
  }, [devices])

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerBackVisible: false,
      headerRight: () => {
        return (
          <HeaderButton
            variant={AvailableColors.white}
            onPress={navigation.goBack}>
            <IconFeather name="x" size={18} color={colors.white} />
          </HeaderButton>
        )
      },
    })
  }, [navigation])

  useEffect(() => {
    ;(async () => {
      const status = await Camera.requestCameraPermission()
      setHasPermission(status === 'authorized')
    })()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate(Routes.AddCustomer)
    }, 3000)
  }, [navigation])

  console.info(barcodes, frameProcessor)
  if (!device || !hasPermission) {
    return <LoadingView />
  }

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Camera
        style={styles.camera}
        isActive
        device={device}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />

      <Overlay />
    </Screen>
  )
}

export default React.memo(GrantedPermissionsScreen)
