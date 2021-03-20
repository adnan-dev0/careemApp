import React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import { color } from "../../theme"
import { layout, moderateScale } from "../../utilities"
import { Facebook, Phone } from "./components"

const bgImage = require("../../../assets/bg-landing.png")
export function Landing() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <Phone />
        <Facebook />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingHorizontal: moderateScale(12),
    paddingBottom: moderateScale(layout.height / 8),
  },
})
