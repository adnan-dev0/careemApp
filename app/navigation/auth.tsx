import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Landing, VerifyOtp } from "../screens"
import { AuthStackParamList } from "./types"
import { VerifyPhone } from "../screens"
import { color } from "../theme"

const AuthStack = createStackNavigator<AuthStackParamList>()

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="VerifyPhone"
        component={VerifyPhone}
        options={{
          headerBackTitleVisible: false,
          title: "",
          headerTintColor: color.primary,
          headerTransparent: true,
        }}
      />
      <AuthStack.Screen
        name="VerifyOtp"
        component={VerifyOtp}
        options={{
          headerBackTitleVisible: false,
          title: "",
          headerTintColor: color.primary,
          headerTransparent: true,
        }}
      />
    </AuthStack.Navigator>
  )
}
