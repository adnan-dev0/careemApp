import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useAuth } from "../../../context"

import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

export function Facebook() {
  const { login } = useAuth()
  const withFacebook = () => {
    // do facebook things here
    login && login("someusertoken")
  }
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={withFacebook}
    >
      <Text style={styles.buttonText}>or continue with Facebook</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: moderateScale(15),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(5),
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: typography.secondary,
    color: color.text,
  },
})
