import { StatusBar } from "expo-status-bar"
import React, { useCallback, useEffect, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import { usePermission } from "./app/hooks"
import { useIsAuthorized } from "./app/hooks/useIsAuthorized"
import { AuthProvider } from "./app/context"
import { AppContainer } from "./app/navigation"
import { initFonts } from "./app/theme/fonts"

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const { isAuthReady, isAuthorized } = useIsAuthorized()
  const { askPermission } = usePermission("location")
  useEffect(() => {
    async function prepareResources() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await initFonts()
        await askPermission()
        await new Promise((resolve) => setTimeout(resolve, 3000))
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }
    prepareResources()
  }, [])

  const onLayoutRootView = useCallback(
    async function () {
      if (appIsReady && isAuthReady) {
        await SplashScreen.hideAsync()
      }
    },
    [appIsReady, isAuthReady]
  )

  if (!appIsReady || !isAuthReady) return null
  return (
    <AuthProvider isAuthorized={isAuthorized}>
      <AppContainer onLayoutRootView={onLayoutRootView} />
      <StatusBar style="auto" />
    </AuthProvider>
  )
}
