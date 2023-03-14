import {View,StyleSheet,Image, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const Home = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient 
    style={styles.container}
    colors={["#fbdcdc","#f4b38f","#f79794"]}
    
    >
      <View style={styles.up}>
      <Image source={require('../Images/inno.png')} style={{marginLeft:100}}></Image>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
      <Image source={require('../Images/profile.png')} style={{marginTop:45,marginLeft:40}}></Image>
      </TouchableOpacity>
      </View>
      <Image source={require('../Images/mainpic.png')} style={styles.mainpic}></Image>
      <View style={styles.container1}>
      <TouchableOpacity onPress={()=>navigation.navigate('Ecg')}>
      <Image source={require('../Images/ecg1.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Spo2')}>
      <Image source={require('../Images/spo2.png')} style={{width:100,height:100,marginTop:40,marginBottom:12}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Nibp')}>
      <Image source={require('../Images/nibp1.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Temp')}>
      <Image source={require('../Images/temp.png')} style={{width:90,height:90,marginTop:20}}></Image>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
},
container1 : {
  flexDirection:"row",
  padding:40,
  alignItems: 'center',
  justifyContent: 'center',
},
up:{
    flexDirection:"row",
},

mainpic:{
  width:300,
  height:300,
  marginLeft:50,
  marginTop:20,
  borderRadius:50,
},
inno:{
  marginLeft:120,
},

});

export default Home



