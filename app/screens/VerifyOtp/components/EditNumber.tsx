import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

type Props = {
  onEditNumber: () => void
}

export function EditNumber({ onEditNumber }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onEditNumber}
    >
      <Text style={styles.text}>Edit Number</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginLeft: moderateScale(5),
    justifyContent: "center",
  },
  text: {
    color: color.link,
    fontFamily: typography.secondary,
    fontSize: moderateScale(12),
  },
})
