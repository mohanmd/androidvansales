import React, {Fragment} from 'react';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {  Toolbar, Dimensions, Modal,  ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View, Image, MenuIcon, TextInput } from "react-native";
import MapView ,{ MAP_TYPES,PROVIDER_GOOGLE, PROVIDER_DEFAULT,UrlTile, Marker } from 'react-native-maps';
// import {Button,Container,Header,Left,Right,Icon,Text,Radio } from 'native-base';


const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map : {
        height: Dimensions.get('window').width, 
        width : Dimensions.get('window').height
    }
});
export default class RouteMap extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
          region: {
            latitude: 51.5079145,
            longitude: -0.0899163,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          markers: []        // Here it is
        }
      }
// export default function RouteMap({navigation}) {
    render() {
        return(
            <View style={styles.container}>
                <MapView style={styles.map} region={this.state.region}
                onPress={(e) => this.setState({ markers: [ { latlng: e.nativeEvent.coordinate }] })}>
                {
                    // loop through markers array & render all markers
                    this.state.markers.map((marker, i) => (
                        <Marker coordinate={marker.latlng} key={i} />
                    ))
                }
                </MapView>

            </View>
        )
    }
}
 