import { useRef } from "react"
import { TextInput } from "react-native-gesture-handler"

export function useVerifyOtp() {
    const codeInputRef = useRef<TextInput>()
    const onEditNumber = () => {
        console.log('onEditNumber')
    }
    const onResendCode = () => {
        console.log('onResendCode')
    }
    const onCallMe = () => {
        console.log('onCallMe')
    }
    const onCodeInput = () => {
        console.log('onCodeInput')
    }
    return { onEditNumber, onResendCode, onCallMe, onCodeInput, codeInputRef }
}