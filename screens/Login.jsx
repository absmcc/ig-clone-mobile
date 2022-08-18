import { View, Text } from "react-native"
import { loginStyles } from "./../assets/styles"
import {Button, Input} from "react-native-elements"


function Login() {
  return (
    <View styles={loginStyles.headerBar}>
      <Input placeholder="Email" keyboardType="email-address"/>
      <Input placeholder="Password" secureTextEntry={true} autoCapitalize={false} autoCorrect={false} />
      <Button title={'submmit'} />
      
    </View>
  )
}

export default Login
