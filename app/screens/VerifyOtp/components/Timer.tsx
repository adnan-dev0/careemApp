import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { color } from "../../../theme"
import { moderateScale } from "../../../utilities"

function useInterval(
  callback: Dispatch<SetStateAction<number>>,
  delay: number
) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback?.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

type Props = {
  text: string
  onPress: () => void
}

export function Timer({ text, onPress }: Props) {
  const [count, setCount] = useState(60)

  useInterval(() => {
    if (count > 0) setCount(count - 1)
  }, 1000)

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={count > 0}
    >
      <Text
        style={[styles.text, { color: count > 0 ? color.dim : color.link }]}
      >
        {text} {count > 0 ? `00:${count < 10 ? "0" + count : count}` : ""}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(16),
  },
})
