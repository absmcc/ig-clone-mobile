import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView } from "react-native"
import Hero from "./components/Hero"
import PhotoList from "./components/PhotoList"

export default function App() {
  return (
    <>
      <Hero />
      <PhotoList />
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  
})
