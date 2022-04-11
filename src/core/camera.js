import React , { Component, Fragment }  from 'react'
import { PermissionsAndroid, Dimensions,ImageBackground , ScrollView , StyleSheet, Text, View, Image, TouchableOpacity , TextInput ,Alert } from "react-native";
import {Button  } from 'react-native-paper';
import * as ImagePicker  from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});


  
export default class CameraPage extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isCameraVisiable: false
        }
      }
      showCameraView = () => {
        this.setState({ isCameraVisible: true });
      }

      takePicture = async () => {
        if (this.RNCamera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.RNCamera.takePictureAsync(options);
          console.log(data.uri);
        }
        this.setState({ isCameraVisible: false });
      };
    


      
      render() {
        const { isCameraVisible } = this.state;
        return (
          <View style={styles.container}>
            {isCameraVisible &&
            <RNCamera
              ref={(cam) => {
                this.RNCamera = cam;
              }}
              style={styles.preview}
              >
              <TouchableOpacity>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
              </TouchableOpacity>
            </RNCamera>}
            <Button title="Show me Camera"  /> 
            <Button mode="contained" onPress={this.showCameraView}>CLick</Button>
          </View>
        );
      }


      
  takePicture() {
    const options = {};
    //options.location = ...
    this.RNCamera.capture({metadata: options})
      .then((data) => {
         console.log(data);
         this.setState({ isCameraVisible: false });
    }
    );
  }
}