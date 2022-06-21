import React, {Fragment, useRef} from 'react';
import { PermissionsAndroid, Dimensions,ImageBackground , ScrollView , StyleSheet, Text, View, Image, TouchableOpacity , TextInput ,Alert } from "react-native";

import common_style from '../../../../assets/styles/common_style';

import CameraPage from '../../camera'




const returnsList = [
    {'id' : '001', 'status' : 1},
    {'id' : '002', 'status' : 0},
    {'id' : '002', 'status' : 1},
    {'id' : '002', 'status' : 0},
    {'id' : '002', 'status' : 1},
    {'id' : '002', 'status' : 1},
]

const optionsPerPage = [2, 3, 4];

export default function ReturnsManagement(props) {
    

  
    
            

    return(
        <ScrollView  width="100%" height="100%" style={common_style.main_wrapper}>
            <CameraPage></CameraPage>
        </ScrollView>
    );


    takePicture = async () => {
        if (this.RNCamera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.RNCamera.takePictureAsync(options);
          console.log(data.uri);
        }
        setCameraVisible(false);
    };
}