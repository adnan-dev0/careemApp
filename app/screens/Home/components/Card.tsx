import React from "react"
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from "react-native"
import { color, typography } from "../../../theme"
import { layout, moderateScale } from "../../../utilities"

export type Props = {
  id: string
  title: string
  image: string
}

export function Card({ id, title, image }: Props) {
  return (
    <TouchableOpacity style={styles.container} key={id} activeOpacity={0.7}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        resizeMode="center"
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(8),
    width: layout.width / 3 - 14,
    height: moderateScale(90),
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
  image: {
    width: layout.width / 3 - 14,
    height: moderateScale(90),
    paddingBottom: moderateScale(5),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontFamily: typography.primary,
    fontWeight: "400",
    fontSize: moderateScale(10),
  },
})
