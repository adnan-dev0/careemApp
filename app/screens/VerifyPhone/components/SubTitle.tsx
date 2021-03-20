import React from "react"
import { StyleSheet, Text } from "react-native"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

type SubTitleProps = {
  text: string
}

export const SubTitle = ({ text }: SubTitleProps) => (
  <Text style={styles.subTitle}>{text}</Text>
)
const styles = StyleSheet.create({
  subTitle: {
    fontFamily: typography.secondary,
    fontSize: moderateScale(12),
    marginVertical: moderateScale(5),
    color: color.dim,
  },
})
