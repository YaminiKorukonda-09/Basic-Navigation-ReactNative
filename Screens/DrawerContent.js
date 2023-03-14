import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Text} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';


export function DrawerContent(props){
    const navigation = useNavigation();
    
    return (
        <View style={{flex: 1}}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: "#f5ad86"}}>
            <View
              style={{
                flexDirection: "column",
                paddingLeft: 20,
                // backgroundColor: "black",
                alignItems: "center",
                paddingBottom:0,
                paddingTop:70,
                justifyContent:'center',
              }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Bluetooth')}>
              <Image source={require("../assets/icons/bluetooth.png")} style={{width:60, height:60,marginBottom:20}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Wifi')} >
              <Image source={require("../assets/icons/wifi.png")} style={{width:45, height:45,marginBottom:20,marginTop:20}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Battery')}>
              <Image source={require("../assets/icons/battery.png")} style={{width:45, height:45,marginBottom:20,marginTop:20}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('PicContainer')} >
              <Image source={require("../assets/icons/piccontainer.png")} style={{width:50, height:50,marginBottom:20,marginTop:20}} />
              </TouchableOpacity>  
              <TouchableOpacity onPress={()=>navigation.navigate('Set')}>
              <Image source={require("../assets/icons/settings.png")} />
              </TouchableOpacity>
            </View>
            <View style={{padding: 20}}>
              <DrawerItemList {...props} />
            </View>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Bell')} >
              <Image source={require("../assets/icons/Bell.png")} style={{width:50,height:50,marginLeft:60,marginTop:70}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Queries')} >
              <Image source={require("../assets/icons/queries.jpg")} style={{width:50,height:50,marginLeft:60,marginTop:55}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{paddingTop:560}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        </View>
      );
}

