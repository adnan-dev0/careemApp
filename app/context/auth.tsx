import React, { useState, createContext, useContext } from "react"
import { SecureStore } from "../utilities"

type AuthType = {
  isAuthorized: Boolean
  login?: (token: string) => void
  logout?: () => void
}

export const AuthContext = createContext<AuthType>({
  isAuthorized: false,
})

export const AuthProvider: React.FC<AuthType> = ({
  children,
  isAuthorized: isAuth,
}) => {
  const [isAuthorized, setIsAuthorized] = useState(isAuth)
  const login = async (token: string) => {
    await SecureStore.setItem("user_token", token)
    setIsAuthorized(true)
  }
  const logout = async () => {
    await SecureStore.removeItem("user_token")
    setIsAuthorized(false)
  }
  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
