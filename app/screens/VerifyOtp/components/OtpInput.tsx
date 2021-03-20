import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { color } from "../../../theme"
import { layout, moderateScale } from "../../../utilities"

type Props = {
  onCodeInput: () => void
}

export const OtpInput = forwardRef(({ onCodeInput }: Props, ref) => {
  const inputRef = useRef<TextInput>()
  const [otp, setOtp] = useState("")

  useImperativeHandle(ref, () => ({
    value: (code?: string) => {
      if (typeof code === "string") {
        setOtp(code)
        return
      }
      return otp
    },
  }))

  const onChangeText = (text: string) => {
    setOtp(text)
    if (text.length === 4) {
      inputRef.current?.blur()
      onCodeInput()
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        ref={inputRef}
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
})

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
