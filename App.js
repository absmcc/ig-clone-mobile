import { SafeAreaView, StyleSheet } from "react-native"
import Login from "./screens/Login"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PhotoList from "./screens/PhotoList"
import { Icon } from "react-native-elements"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={PhotoList}
          options={() => ({
            tabBarIcon: () => <Icon name="house" size="20" />,
          })}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={() => ({
            tabBarIcon: () => (
              <Icon name="sc-telegram" type="evilicon" size="20" />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
