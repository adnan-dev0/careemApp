import React from "react"
import { StyleSheet, Text } from "react-native"
import { typography } from "../../../theme"
import { moderateScale } from "../../../utilities"
type TitleProps = {
  text: string
}
export const Title = ({ text }: TitleProps) => (
  <Text style={styles.title}>{text}</Text>
)
const styles = StyleSheet.create({
  title: {
    fontFamily: typography.primary,
    fontSize: moderateScale(18),
    marginVertical: moderateScale(5),
  },
})
