import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { color } from "../../../theme"
import { layout, moderateScale } from "../../../utilities"

type Props = {
  onCodeInput: (value: string) => void
}

export const OtpInput = ({ onCodeInput }: Props) => {
  const onChangeText = (text: string) => {
    if (text.length === 4) {
      onCodeInput(text)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        textAlign="center"
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        style={styles.textInput}
        placeholder="0000"
        placeholderTextColor={color.dim}
        maxLength={4}
        onChangeText={onChangeText}
        underlineColorAndroid={color.transparent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(20),
    alignItems: "center",
    alignContent: "stretch",
  },
  textInput: {
    letterSpacing: layout.width / 10,
    width: layout.width,
    fontSize: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: color.line,
    paddingBottom: moderateScale(5),
  },
})
