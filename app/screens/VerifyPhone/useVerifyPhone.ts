import { useNavigation } from '@react-navigation/core'
import { useRef, useState } from 'react'
import { TextInput } from 'react-native'
import { Country, CountryCode } from 'react-native-country-picker-modal'

export function useVerifyPhone() {
    const navigation = useNavigation()
    const [countryCode, setCountryCode] = useState<CountryCode>('US')
    const [country, setCountry] = useState<Country>()
    const phoneInputRef = useRef<TextInput>()
    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setCountry(country)
    }

    const onContinue = () => {
        const phone = phoneInputRef.current?.value()
        // validation here
        navigation.navigate('VerifyOtp', { phone: `${country?.callingCode[0] || '+1'} ${phone}` })
    }

    return { countryCode, onSelect, onContinue, phoneInputRef }
}