import React from 'react';
import Login from './Screens/Home';
import Signup from './Screens/Feed';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
 return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Feed" component={Feed}/>
        </Stack.Navigator>
    </NavigationContainer>
 );
}

