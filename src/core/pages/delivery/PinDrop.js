import React, {Fragment} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {  Toolbar,Dimensions, Modal,  ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View, Image, MenuIcon, TextInput, Grid } from "react-native";
import common_style from '../../../../assets/styles/common_style';
import pages_style from '../../../../assets/styles/pages_style';
import { Card, Button, Typography,Appbar, IconButton  } from 'react-native-paper';
import MapView ,{ MAP_TYPES,PROVIDER_GOOGLE, PROVIDER_DEFAULT,UrlTile, Marker } from 'react-native-maps';

import { Icon } from 'react-native-elements';
import RouteMap from './RouteMap';
const useStyles = makeStyles((theme) => ({
    input: {
      color: "#fff"
    },  
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));


let tripList = [
    { 'id' : 'T120002121', 'truckno' : 'T13N00121', 'date' : '16/03/2022'},
    { 'id' : 'T120002122', 'truckno' : 'T13N00146', 'date' : '06/04/2022'},
    { 'id' : 'T120002123', 'truckno' : 'T13A00132', 'date' : '26/05/2022'},
    { 'id' : 'T120002124', 'truckno' : 'T13H00145', 'date' : '10/06/2022'},
    { 'id' : 'T120002125', 'truckno' : 'T13B00141', 'date' : '06/06/2022'},
];
 
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      maxWidth : 800,
      width : '90%',
      overflow: 'hidden'
    }, 
    buttonClose: {
      backgroundColor: "#f00",
      fontSize : 10
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    modalHeader : {
        backgroundColor : '#444',
        width : '100%',
        padding : 10,
        paddingHorizontal : 20,
        color : '#fff'
    },
    modalContent : {
        padding: 30
    },
    map : {
        height: Dimensions.get('window').width, 
        width : Dimensions.get('window').height
    }
  });
  
export default function PinDrop({navigation}) {
    const [open, setOpen] = React.useState(false);    
    const [createTrip, setCreateTrip] = React.useState(false);
    const [SelectedValue, setSelectedValue] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [dta, setdta] = React.useState();
    const [region, setRegion] =  React.useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [marker, setMarker] =  React.useState({
        
    });
     
    const openModal = () => {
        setModalVisible(true);
    };   
    
    const closeModal = () => {
        setModalVisible(false);
    };

    // const addMarker = (e) => {
    //     setMarker({ markers: [...setMarker.markers, { latlng: e.nativeEvent.coordinate }] })
    // };


    const classes = useStyles(); 
    const mb0 = {
        marginBottom: 0
    } 

    const navbar = {
        alignItems : 'center', 
        flexDirection : 'row', 
        justifyContent:'space-between',
        paddingHorizontal : 20,
        paddingVertical : 10
    }

    const appbar = {
        backgroundColor: '#ffffffc4',
        paddingHorizontal : 10,
        paddingVertical : 10,
        height : 70,
        justifyContent:'space-between',
        flexDirection : 'row'
    }
  return (
    <ScrollView  >
        <View width="100%" height="100%" style={common_style.main_wrapper}>
            <ImageBackground source={require('../../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
                <View  style={pages_style.container}>
                    <View  style={navbar}>
                        <View >
                            <Image source={require('../../../../assets/images/van_logo.png')} style={{width: 130, height:60}} />
                        </View>
                        <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                           <Text style={{ color : '#fff'}}> <Text style={{ fontSize : 15 }}>Welcome</Text> <Text style={{ fontSize : 19, fontWeight : '600' }}> Hari</Text></Text>
                        </View>
                    </View>
                    {/* <HeaderSecondary /> */}
                     <Appbar position="static" color="default" style={appbar}>
                         <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                            <IconButton  onPress={() => navigation.navigate('Home') } icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={22} color="#e09300"></IconButton>
                            <Text variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : 21}}>
                                Add Location
                            </Text>
                         </View> 
                    </Appbar> 
                    <View style={pages_style.homepage_box}>
                        <View  style={{width : '100%', flexDirection : 'row'}}>
                            {/* <MapView
                                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                style={styles.map}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                onRegionChangeComplete={(region) => setRegion(region)}
                                onPress={(e) => setMarker({ markers: [{ latlng: e.nativeEvent.coordinate }] })}
                                >
                                    
                                <Marker coordinate = {{latitude: 37.78825,longitude: -122.4324}}
                                pinColor = {"purple"} // any color
                                title={"title"}
                                description={"description"}/>
                            </MapView>
                            <Text >Current latitude: {region.latitude}</Text>
                            <Text >Current longitude: {region.longitude}</Text>
                            <Text >Current longitude: {marker}</Text> */}
                        <RouteMap></RouteMap>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        
            {/* <OrderCreate setSelectedValue={SelectedValue} openmodal={open} handleClose={handleClose}></OrderCreate> */}

        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            openModal()
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Text style={{color: '#fff'}}>Assign Driver and Load Man</Text>
                </View>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Hello World!</Text>

                    <Button  style={ styles.buttonClose}
                        onPress={() => closeModal()}
                    >Hide Modal </Button>
                </View>
            </View>
          </View>
        </Modal>
    </ScrollView>
    )
}