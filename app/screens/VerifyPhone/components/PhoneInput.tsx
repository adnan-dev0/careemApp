import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react"
import { StyleSheet, TextInput, View } from "react-native"
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal"
import { color, typography } from "../../../theme"
import { moderateScale } from "../../../utilities"

type PhoneInputProps = {
  countryCode: CountryCode
  onSelect: (country: Country) => void
}

export const PhoneInput = forwardRef(
  ({ countryCode, onSelect }: PhoneInputProps, ref) => {
    const [value, setValue] = useState("")
    useImperativeHandle(ref, () => ({
      value: () => {
        return value
      },
    }))
    return (
      <View style={styles.container}>
        <CountryPicker
          withCallingCode
          countryCode={countryCode}
          withCallingCodeButton
          onSelect={onSelect}
        />
        <TextInput
          selectTextOnFocus={false}
          style={styles.textInput}
          maxLength={15}
          clearButtonMode="always"
          textContentType={"telephoneNumber"}
          keyboardType="phone-pad"
          underlineColorAndroid={color.transparent}
          placeholder={"301 2345678"}
          selectionColor={color.primaryLight}
          onChangeText={setValue}
        />
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
    borderBottomWidth: 1,
    paddingBottom: moderateScale(5),
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    fontFamily: typography.primary,
    fontWeight: "200",
    fontSize: 16,
    textDecorationLine: "none",
    paddingLeft: moderateScale(5),
  },
})
