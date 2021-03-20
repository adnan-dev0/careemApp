import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/core"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

export function Phone() {
  const navigation = useNavigation()
  const withPhone = () => {
    navigation.navigate('VerifyPhone')
  }
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={withPhone}
    >
      <Text style={styles.buttonText}>Continue with mobile number</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: moderateScale(15),
    backgroundColor: color.primary,
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(5),
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: typography.secondary,
    color: color.text,
  },
})
