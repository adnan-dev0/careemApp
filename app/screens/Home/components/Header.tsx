import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.appLogoContainer}>
        <Text style={styles.appLogoText}>Car Booking</Text>
      </View>
      <View style={styles.pointsContainer}>
        <AntDesign
          name="gift"
          size={moderateScale(14)}
          color={color.primaryLight}
        />
        <Text style={styles.pointsText}>200pts</Text>
        <AntDesign name="right" size={moderateScale(10)} color={color.dim} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "row",
  },
  appLogoContainer: {},
  appLogoText: {
    fontFamily: typography.primary,
    color: color.primary,
    fontWeight: "bold",
    fontSize: moderateScale(22),
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  pointsText: {
    marginHorizontal: moderateScale(5),
    fontSize: moderateScale(12),
    fontWeight: "500",
  },
})
