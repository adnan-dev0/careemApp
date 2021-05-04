import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { color } from "../../../theme"
import { moderateScale } from "../../../utilities"

export const SafetyInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Safety </Text>
      <View style={styles.row}>
        <MaterialIcons
          name={"privacy-tip"}
          color={color.link}
          size={moderateScale(50)}
        />
        <View style={styles.subTextContainer}>
          <Text style={styles.subTextTitle}>Your safety matters</Text>
          <Text style={styles.subTextDescription} numberOfLines={2}>
            We've taken actions to keep you safe while using our services.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.infoButton} activeOpacity={0.7}>
        <Text style={styles.infoButtonText}>See what we're doing</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    padding: moderateScale(12),
    backgroundColor: color.cardBackground,
    borderRadius: moderateScale(5),
    shadowColor: color.dim,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 3,
  },
  titleText: {
    textTransform: "uppercase",
    color: color.dim,
    fontWeight: "500",
    fontSize: moderateScale(9),
    marginBottom: moderateScale(8),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(12),
  },
  subTextContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(12),
  },
  subTextTitle: {
    fontWeight: "500",
    fontSize: moderateScale(12),
  },
  subTextDescription: {
    paddingTop: moderateScale(5),
    color: color.dim,
    fontSize: moderateScale(10),
  },
  infoButton: {
    marginTop: moderateScale(10),
    alignItems: "center",
    borderRadius: moderateScale(15),
    backgroundColor: color.primaryLight,
  },
  infoButtonText: {
    padding: moderateScale(12),
    fontWeight: "500",
    color: color.primary,
  },
})
