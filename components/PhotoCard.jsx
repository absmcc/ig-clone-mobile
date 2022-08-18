import { View, Image, Text, } from "react-native"
import { photoCardStyles } from "../assets/styles"
import {Avatar, Icon} from "react-native-elements"

function PhotoCard({ photo }) {
  const BASE_URL = "https://source.unsplash.com/random?miami="
  return (
    <>
      <View style={photoCardStyles.cardContainer}>
        <View style={photoCardStyles.cardHeader}>
          <Avatar rounded size='small' source={{uri: `https://randomuser.me/api/portraits/men/${photo.id}.jpg`}}/>
          
          <View>
            <Text> Maria Redman </Text>
            <Text style={photoCardStyles.cardLocation}>Germany</Text>
          </View>
        </View>
        <Icon name='code' />
       
      </View>

      <Image source={{ uri: BASE_URL + photo.id }} 
      style={photoCardStyles.cardImage} />
      <Text style={photoCardStyles.cardText}> Text here</Text>
    </>
  )
}

export default PhotoCard
