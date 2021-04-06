import React from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { color } from "../../theme"
import { moderateScale } from "../../utilities"
import { CardsSection, Header, BookRideCard } from "./components"

export function Home() {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[styles.container, { paddingTop: insets.top + moderateScale(10) }]}
    >
      <Header />
      <CardsSection />
      <BookRideCard />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(12),
    backgroundColor: color.background,
  },
})
