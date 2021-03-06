import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome, EvilIcons } from "@expo/vector-icons"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"
import { TextInput } from "react-native-gesture-handler"

export function BookRideCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Book a ride</Text>
      <View style={styles.searchContainer}>
        <View style={styles.leftSearchContainer}>
          <FontAwesome
            name={"circle"}
            color={color.primary}
            size={moderateScale(10)}
          />
          <TextInput
            style={styles.subText}
            placeholder={"Enter your destination"}
          ></TextInput>
        </View>
        <EvilIcons name={"search"} color={color.dim} size={moderateScale(20)} />
      </View>
      <View style={styles.tagContainer}>
        <TouchableOpacity style={styles.tags} activeOpacity={0.7}>
          <Text style={styles.tagText}>901 Street 37, F 17/2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tags} activeOpacity={0.7}>
          <Text style={styles.tagText}>901 Street 37, F 17/2</Text>
        </TouchableOpacity>
      </View>
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
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: moderateScale(20),
  },
  subText: {
    paddingLeft: moderateScale(10),
    color: color.dim,
    fontSize: moderateScale(12),
    flex: 0.9
  },
  leftSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: moderateScale(15),
  },
  tags: {
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
    backgroundColor: color.lightBackground,
    marginRight: moderateScale(5),
  },
  tagText: {
    fontSize: moderateScale(10),
    fontFamily: typography.secondary,
  },
})
