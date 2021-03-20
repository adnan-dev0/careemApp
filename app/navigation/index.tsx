import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { AuthStackNavigator } from "./auth"
import { HomeStackNavigator } from "./home"
import { useAuth } from "../context"

type AppContainerProps = {
  onLayoutRootView: () => void
}

export function AppContainer({ onLayoutRootView }: AppContainerProps) {
  const { isAuthorized } = useAuth()
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <SafeAreaProvider>
        {isAuthorized ? <HomeStackNavigator /> : <AuthStackNavigator />}
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
