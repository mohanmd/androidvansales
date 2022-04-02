// import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../src/core/login';
import Home from '../src/core/pages/Home';
import DeliveryList from '../src/core/pages/delivery/deliveryList';
import TripDetail from '../src/core/pages/delivery/tripDetail';
import CollectionList from '../src/core/pages/CashCollection/CashCollection';
import InvoiceList from '../src/core/pages/Invoices/InvoiceList';
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
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DeliveryList" component={DeliveryList} />
        <Stack.Screen name="TripDetail" component={TripDetail} />
        <Stack.Screen name="collection" component={CollectionList} />
        <Stack.Screen name="invoicelist" component={InvoiceList} />
    </Stack.Navigator> 
    
)
}
export default Routes