import React , { Component, Fragment, useEffect  }  from 'react'
import { ImageBackground, Dimensions ,SafeAreaView, ScrollView , StyleSheet, Text, View, Image , TextInput ,Alert } from "react-native";
import { Button, IconButton  } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'; 




const navbar = {
    alignItems : 'center', 
    flexDirection : 'row', 
    justifyContent:'space-between',
    paddingHorizontal : 20,
    paddingVertical : 10
}

export default function HeadeTop({navigation}) {
    // const { navigation } = props;
    const [curentUser, setCurrentUser] = React.useState("");

    useEffect(() => {
        const getUser = async()=>{
          let user = await AsyncStorage.getItem("user");
          setCurrentUser(JSON.parse(user));
        //   console.log(props); 
        }
        getUser();
    }, []) 
    
    return (
        // <View style={{ height : 80, paddingHorizontal : 20, paddingTop : 16, paddingBottom : 40, flexDirection : 'row', justifyContent : 'space-between'  }}>
        //     <Image source={require('../../../../assets/images/van_logo.png')} style={{width: 130, height:50}} />
        //     <IconButton onPress={() => navigation.navigate('Login') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/450/450387.png' }} size={21} color="#fff"></IconButton>
        // </View>

        <View  style={navbar}>
            
            <View >
                <Image source={require('../../../../assets/images/van_logo.png')} style={{width: 130, height:60}} />
            </View>
            <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                <IconButton onPress={() => navigation.navigate('Login') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/450/450387.png' }} size={21} color="#fff"></IconButton>
                <Text style={{ color : '#fff'}}> <Text style={{ fontSize : 15 }}>Welcome</Text> <Text style={{ fontSize : 19, fontWeight : '600' }}> Hari</Text></Text>
            </View>
        </View>
    )

}