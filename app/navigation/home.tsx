import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Home } from "../screens"
import { HomeStackParamList } from "./types"

const HomeStack = createStackNavigator<HomeStackParamList>()

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}
