import React from "react"
import { View, Text, StyleSheet } from "react-native"


function Hero() {
  return (
    <View styles={styles.headerBar}>
      <Text styles={styles.headerText}>
        IG Clone
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    height: 80,
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
  },
})
export default Hero
