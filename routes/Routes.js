// import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../src/core/login';
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//   } from 'react-native';

const Stack = createStackNavigator();
const Routes = () => {  
return (  
    
    <Stack.Navigator  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator> 
    
)
}
export default Routes