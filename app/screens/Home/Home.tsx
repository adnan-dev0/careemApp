import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../context"

export function Home() {
  const { logout } = useAuth()
  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
