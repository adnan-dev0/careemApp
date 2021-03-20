import React from "react"
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native"
import { color } from "../../../theme"
import { moderateScale } from "../../../utilities"

type ContinueButtonProps = {
  isValid: Boolean
  onContinue: () => void
}

export function ContinueButton({ isValid, onContinue }: ContinueButtonProps) {
  return (
    <KeyboardAvoidingView
      style={{ opacity: isValid ? 1 : 0.5 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <TouchableOpacity
        onPress={onContinue}
        disabled={!isValid}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    backgroundColor: color.primaryDarker,
    paddingVertical: moderateScale(15),
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  text: {
    fontSize: moderateScale(16),
    color: color.text,
    fontWeight: "400",
  },
})
