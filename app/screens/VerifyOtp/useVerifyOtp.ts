import { useAuth } from "../../context"

export function useVerifyOtp() {
    const { login } = useAuth()
    const onEditNumber = () => {
        console.log('onEditNumber')
    }
    const onResendCode = () => {
        console.log('onResendCode')
    }
    const onCallMe = () => {
        console.log('onCallMe')
    }
    const onCodeInput = (value: string) => {
        console.log('onCodeInput', value)
        login && login(value)
    }
    return { onEditNumber, onResendCode, onCallMe, onCodeInput }
}