import React from "react"
import { ImageBackground, StyleSheet, View, Text } from "react-native"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

export type Props = {
  id: string
  title: string
  image: string
}

export function Card({ id, title, image }: Props) {
  return (
    <View style={styles.container} key={id}>
      <ImageBackground
        source={{uri:image}}
        style={styles.image}
        resizeMode="center"
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(10),
    width: moderateScale(110),
    height: moderateScale(90),
    backgroundColor: color.text,
    borderRadius: moderateScale(10),
  },
  image: {
    width: moderateScale(110),
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
