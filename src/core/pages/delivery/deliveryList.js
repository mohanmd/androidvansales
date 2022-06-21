import React, {Fragment, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {  Toolbar, Modal,  ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View, Image, MenuIcon, TextInput, Grid } from "react-native";
import common_style from '../../../../assets/styles/common_style';
import pages_style from '../../../../assets/styles/pages_style';
import { Card, Button, Typography,Appbar, IconButton  } from 'react-native-paper';
import { API_URL } from "../../../../env";
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-community/async-storage';


import { Icon } from 'react-native-elements';
import HeadeTop from '../component/HeaderTop'; 
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

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


let tripList1 = [
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
    }
  });
  
export default function DeliveryList(props) {
    const {navigation} = props;
    const [open, setOpen] = React.useState(false);    
    const [createTrip, setCreateTrip] = React.useState(false);
    const [SelectedValue, setSelectedValue] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState(''); 
    const [tripList, setTripList] = React.useState('');  
 
    const [search, setSearch] = React.useState('');
    const [filteredDataSource, setFilteredDataSource] =  React.useState([]);
    const [masterDataSource, setMasterDataSource] =  React.useState([]);

    const openModal = () => {
        setModalVisible(true);
    };   
    
    const closeModal = () => {
        setModalVisible(false);
    };

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    };

   
    useEffect(()=>{
        console.log(props);
        const getUser = async()=>{
            console.log(API_URL); 
            let user = await AsyncStorage.getItem("user1");
            setCurrentUser(JSON.parse(user?.user));
        }
        getUser();

        // call trip list
        axios.get(`${API_URL}/trip`, currentUser?._id)
            .then(async (res) => {
                if(res.status == '200'){
                    setTripList(res?.data);
                    setFilteredDataSource(res?.data);
                    setMasterDataSource(res?.data);
                }else{
                    alert('Something went wrong');
                }
                // await AsyncStorage.setItem("user", JSON.stringify(res?.data));
                // await AsyncStorage.setItem("accessToken", JSON.stringify(res?.data));
            }).catch((error) => {
                console.log(error)
        });

        console.log(currentUser) ;
        // axios.get(`${API_URL}/login`, userObject)
        // .then(async (res) => {
        //     console.log(res.data);
        //     alert('Login Success');
        //     goHome();
        //     // await AsyncStorage.setItem("user", JSON.stringify(res?.data));
        //     // await AsyncStorage.setItem("accessToken", JSON.stringify(res?.data));
        // }).catch((error) => {
        //     console.log(error)
        // });
    }, []);
    
  


    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          console.log(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
    };

    const classes = useStyles();
    const itemList =  {
        maxWidth : 180 , 
        width : '100%', 
        textAlign : 'center',
        borderRadius : 14, 
        borderWidth : 1,
        borderColor: '#ccc',
        paddingTop : 18,
        paddingBottom : 10,
        margin : 10,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        fontSize : 17
    };
    const itemTextTitle =  {
        fontSize : 19,
        color: '#186e9e',
        fontWeight : '600',
        marginBottom: 10
    };
    const itemTextLabel =  {
        fontSize : 16,
        marginBottom: 2
    };
    const mb0 = {
        marginBottom: 0
    }
    const itemListAdd = {
        maxWidth : 200 , 
        width : '100%', 
        height : 200 ,
        textAlign : 'center',
        borderRadius : 14,
        // border: '1px solid #ccc',
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        // display: "flex",
    }
    const itemListAdd1 = {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
    const itemListAddText = { 
        fontSize : 20,
        color: '#186e9e',
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
    <View   contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
        <View width="100%" height="100%" style={common_style.main_wrapper}>
            <ImageBackground source={require('../../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
                <View  style={pages_style.container}>
                    
                    <HeadeTop />
                    {/* <HeaderSecondary /> */}
                     <Appbar position="static" color="default" style={appbar}>
                         <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                            <IconButton  onPress={() => navigation.navigate('Home') } icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={22} color="#e09300"></IconButton>
                            <Text variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : 21}}>
                                Delivery Planning
                            </Text>
                         </View>
                        <View style={pages_style.searchBarWrap}>
                            <TextInput placeholder='Search by Trip No / Truck No' style={pages_style.searchBar}
                                onChangeText={(text) => searchFilterFunction(text)}
                                onClear={(text) => searchFilterFunction('')}
                                value={search}
                            ></TextInput>
                        </View>
                    </Appbar> 
                    
                    <ScrollView   contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
                        <View style={[pages_style.homepage_box]}>
                            <View style={pages_style.orderList}>
                                {filteredDataSource && filteredDataSource.map((data) => ( 
                                    <TouchableOpacity onPress={() => navigation.navigate('TripDetail')}  key={data._id} sx={{ minWidth: 275, textAlign : 'center', backgroundColor : '#fff' }} style={itemList}  >
                                        <Text  component="div" style={itemTextLabel}>
                                            Trip ID
                                        </Text>
                                        <Text style={itemTextTitle} >
                                            {data.tripid}
                                        </Text>
                                        <Text  component="div" style={itemTextLabel}>
                                            Truck Number
                                        </Text>
                                        <Text style={itemTextTitle} >
                                            {data?.truckdata[0]?.truckno}
                                        </Text>
                                        <Text  component="div" style={itemTextLabel}>
                                            Created Date
                                        </Text>
                                        <Text style={itemTextTitle} >
                                            {data.createdate}
                                        </Text>

                                    </TouchableOpacity>
                                )) || null}
                                {createTrip && (
                                    <View sx={{ minWidth: 275 }}  style={itemListAdd}>
                                        <View style={itemListAdd1}>
                                            <Text  component="div" >
                                                <Button style={itemListAddText} onClick={handleOpen}>+ </Button>
                                            </Text>
                                            <Text>
                                                Create a Trip
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    </ScrollView>
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
    </View>
    )
}