import React from "react"
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { moderateScale } from "../../utilities"
import { PhoneInput, SubTitle, Title, ContinueButton } from "./components"
import { useVerifyPhone } from "./useVerifyPhone"

const HEADER_HEIGHT = 80

export function VerifyPhone() {
  const insets = useSafeAreaInsets()
  const { countryCode, onSelect, onContinue, phoneInputRef } = useVerifyPhone()
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + HEADER_HEIGHT,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View>
        <Title text="Enter your mobile number" />
        <SubTitle text="Enter your mobile number, to create an account or log in"/>
        <PhoneInput
          countryCode={countryCode}
          onSelect={onSelect}
          ref={phoneInputRef}
        />
      </View>
      <ContinueButton isValid={true} onContinue={onContinue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(12),
    justifyContent: "space-between",
  },
})
