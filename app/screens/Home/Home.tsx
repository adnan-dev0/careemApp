import React from "react"
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { color } from "../../theme"
import { moderateScale } from "../../utilities"
import { CardsSection, Header, BookRideCard, SafetyInfo } from "./components"

export function Home() {
  const insets = useSafeAreaInsets()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { paddingTop: insets.top + moderateScale(10) }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        stickyHeaderIndices={[0]}
      >
        <Header />
        <CardsSection />
        <SafetyInfo />
        <BookRideCard />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(12),
    backgroundColor: color.background,
  },
})
