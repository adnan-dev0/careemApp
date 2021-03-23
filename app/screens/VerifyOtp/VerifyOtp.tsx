import { RouteProp } from "@react-navigation/core"
import React from "react"
import { StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { AuthStackParamList } from "../../navigation/types"
import { color } from "../../theme"
import { moderateScale } from "../../utilities"
import { SubTitle, Title } from "../VerifyPhone/components"
import { EditNumber, OtpInput, Timer } from "./components"
import { useVerifyOtp } from "./useVerifyOtp"

const HEADER_HEIGHT = 80

type ProfileScreenRouteProp = RouteProp<AuthStackParamList, "VerifyOtp">

type Props = {
  route: ProfileScreenRouteProp
}

export function VerifyOtp({
  route: {
    params: { phone },
  },
}: Props) {
  const { onEditNumber, onResendCode, onCallMe, onCodeInput } = useVerifyOtp()
  const insets = useSafeAreaInsets()

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
      <Title text="Enter your code" />
      <View style={styles.subTitleContainer}>
        <SubTitle text={`We've sent a 4-digit code to ${phone}`} />
        <EditNumber onEditNumber={onEditNumber} />
      </View>
      <OtpInput onCodeInput={onCodeInput} />
      <View
        style={[styles.subTitleContainer, { justifyContent: "space-between" }]}
      >
        <Timer text="Resend code" onPress={onResendCode} />
        <Timer text="Call me" onPress={onCallMe} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(12),
    backgroundColor: color.background,
  },
  subTitleContainer: {
    flexDirection: "row",
  },
})
