import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'pink'}}>
      <Text> This is Home screen </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Feed')}>
        <Text>Move to signup screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home