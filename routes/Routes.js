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
import RouteMap from '../src/core/pages/delivery/RouteMap';
import ReturnsManagement from '../src/core/pages/Returns/ReturnsManagement';
import CameraPage from '../src/core/camera';
import PinDrop from '../src/core/pages/delivery/PinDrop';
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DeliveryList" component={DeliveryList} />
        <Stack.Screen name="TripDetail" component={TripDetail} />
        <Stack.Screen name="collection" component={CollectionList} />
        <Stack.Screen name="invoicelist" component={InvoiceList} />
        <Stack.Screen name="RouteMap" component={RouteMap} /> 
         <Stack.Screen name="Returns" component={ReturnsManagement} />
        <Stack.Screen name="camera" component={CameraPage} />
        <Stack.Screen name="PinDrop" component={PinDrop} />
    </Stack.Navigator> 
    
)
}
export default Routes