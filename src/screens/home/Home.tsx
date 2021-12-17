import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import { AvailableColors, images } from 'res'
import Screen from 'src/components/atoms/screen/Screen'
import Text from 'src/components/atoms/text/Text'
import styles from './Home.style'
import Card from 'src/components/atoms/card/Card'
import { RootNavigationProp } from 'src/navigators'
import { Routes } from 'src/navigators/routes'

interface HomeProps {
  navigation: RootNavigationProp<Routes.Home>
}

export const Home = ({ navigation }: HomeProps) => {
  const goToAddCustomer = useCallback(() => {
    navigation.navigate(Routes.RegisterTube)
  }, [navigation])

  return (
    <Screen>
      <View style={styles.welcome}>
        <Text size="xl" weight="500">
          Bienvenido de nuevo
        </Text>
      </View>

      <Card
        style={styles.callToAction}
        variant={AvailableColors.primary}
        onPress={goToAddCustomer}>
        <View style={styles.callToActionContent}>
          <Text variant={AvailableColors.white} size="m" weight="500">
            Registra la muestra de un nuevo cliente
          </Text>
        </View>

        <Image
          style={styles.decorator}
          source={images.logo_simple_white}
          resizeMode="contain"
        />
      </Card>
    </Screen>
  )
}
