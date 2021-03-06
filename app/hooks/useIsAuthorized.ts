import { useEffect, useState } from 'react'
import { SecureStore } from '../utilities'

export function useIsAuthorized() {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isAuthReady, setIsAuthReady] = useState(false)
    useEffect(() => {
        async function checkIsAuthorized() {
            try {
                // await SecureStore.removeItem('user_token')
                const token = await SecureStore.getItem('user_token')
                // validate token, expiry
                setIsAuthorized(token ? true : false)
            } catch (error) {

            } finally {
                setIsAuthReady(true)
            }
        }
        checkIsAuthorized()
    }, [])
    return { isAuthReady, isAuthorized }
}