import React from "react"
import { StyleSheet, View } from "react-native"
import { moderateScale } from "../../../utilities"
import { Card, Props } from "./Card"

const DATA = [
  {
    id: "1",
    image: "https://picsum.photos/90",
    title: "Car",
  },
  {
    id: "2",
    image: "https://picsum.photos/90",
    title: "Bike",
  },
  {
    id: "3",
    image: "https://picsum.photos/90",
    title: "City to City",
  },
  {
    id: "4",
    image: "https://picsum.photos/90",
    title: "Delivery",
  },
  {
    id: "5",
    image: "https://picsum.photos/90",
    title: "Send Credit",
  },
  {
    id: "6",
    image: "https://picsum.photos/90",
    title: "Recharge",
  },
]

export function CardsSection() {
  const renderCard = ({ id, title, image }: Props) => (
    <Card key={id} id={id} title={title} image={image} />
  )

  return <View style={styles.container}>{DATA.map(renderCard)}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateScale(20),
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
