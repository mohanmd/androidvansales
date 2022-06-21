import React , { Component, Fragment }  from 'react'
import { PermissionsAndroid, Dimensions,ImageBackground , ScrollView , StyleSheet, Text, View, Image, TouchableOpacity , TextInput ,Alert } from "react-native";
import * as ImagePicker  from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import common_style from '../../assets/styles/common_style';
import pages_style from '../../assets/styles/pages_style'; 
import HeadeTop from './pages/component/HeaderTop';
import { Card, Button, Typography,Appbar, IconButton, DataTable, Modal  } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  navbar : {
      alignItems : 'center', 
      flexDirection : 'row', 
      justifyContent:'space-between',
      paddingHorizontal : 10,
      paddingVertical : 5
  },
  actionBtn : {
      backgroundColor : '#ecb800',
      borderRadius : 4,
      paddingHorizontal : 25,
      paddingVertical : 5,
      marginBottom : 10
  },
  actionBtnText : {
      fontSize : 14,
      color :'#402608',
      fontWeight : 'bold',
  },
  tableHead : {
     textStyle : '#fff',
     justifyContent : 'flex-start',
     height : 30,
     padding : 1
  },
  tableCell : {
      justifyContent : 'flex-start',
      fontSize : 11
  },
  flex2 : {
      flex : 1,
      justifyContent : 'center',
  },
  StatusSucess : {
      color : '#09af00',
      borderRadius : 20,
      padding: 10,
      width : 180,
      fontSize : 13,
      fontWeight : 'bold'
  },
  StatusPending : {
      color : '#ff8100',
      borderRadius : 20,
      padding: 10,
      width : 180,
      fontSize : 13,
      fontWeight : 'bold'
  },
  returnsModal : {
      maxWidth : 500,
      height : 'auto',
      width : '100%',
      borderRadius : 10,
      backgroundColor : '#fff',
      margin : 'auto',
      justifyContent: 'center',
      alignSelf: 'center',
      overflow : 'hidden'
  },
  modalHeader : {
      backgroundColor : '#444',
      color : '#fff',
      padding : 10,
  },
  HeaderText : {
      fontWeight : 'bold',
      color : '#fff'
  },
  modalCont : {
      padding : 15,
      paddingHorizontal : 20
  },
  formInput : {
      borderWidth : 1,
      borderColor : '#ccc',
      paddingVertical : 1,
      paddingHorizontal : 10,
      fontSize: 11,
      marginBottom : 10,
      borderRadius : 5
  },
  submitRetutrnBtn : {
      backgroundColor : '#ecb800',
      borderRadius : 4,
      paddingHorizontal : 25,
      paddingVertical : 5,
      marginLeft : 10,
      marginBottom : 15,
      width : 'auto'
  },
  appbar : {
      backgroundColor: '#ffffffc4',
      paddingHorizontal : 10,
      justifyContent:'space-between',
      flexDirection : 'row',
      margin : 0,
      paddingVertical : 0,
      height: 70
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width : windowWidth,
    height : windowHeight,
    position : 'absolute',
    top : 0,
    left : 1,
    zIndex : 111111111119999
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

const returnsList = [
  {'id' : '001', 'status' : 1},
  {'id' : '002', 'status' : 0},
  {'id' : '002', 'status' : 1},
  {'id' : '002', 'status' : 0},
  {'id' : '002', 'status' : 1},
  {'id' : '002', 'status' : 1},
]

const optionsPerPage = [2, 3, 4];



  
export default class CameraPage extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isCameraVisiable: false,
          modalVisible: false
        }
      }
      
      showModal = () =>  {
        // alert();
        console.log(this.state.modalVisible);
        this.setState({ modalVisible: true });
      }
      hideModal = () =>  {
        this.setState({ modalVisible: false });
      }
      showCameraView = () => {
        this.setState({ isCameraVisible: true });
      }

      takePicture = async () => {
        try {
          if (this.RNCamera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.RNCamera.takePictureAsync(options);
            console.log(data.uri);
          }
          this.setState({ isCameraVisible: false });
        } catch (err) {
          console.log('err: ', err);
        }
      };
    
      // takePicture = async () => {
      //   if (this.RNCamera && !this.state.isCameraVisible) {
           
      //     let options = {
      //       quality: 0.85,
      //       base64: true,
      //     };
    
      //     this.setState({takingPic: true});
    
      //     try {
      //       const data = await this.RNCamera.takePictureAsync(options);
      //       Alert.alert('Success', JSON.stringify(data));
      //     } catch (err) {
      //       Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
      //       return;
      //     } finally {
      //       this.setState({isCameraVisible: false});
      //     }
    
      //   }
      // }

      
      render() {
        const { isCameraVisible } = this.state;
        return (
          
            <View  width="100%" height="100%" style={common_style.main_wrapper}>
              <View width="100%" height="100%" style={common_style.main_wrapper}>
                  <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>

                      <HeadeTop />
                      <Appbar position="static" color="default" style={styles.appbar}>
                          <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                              <IconButton onPress={() => navigation.navigate('Home') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={22} color="#e09300"></IconButton>
                              <Text variant="h6"   style={{fontWeight : 'bold', color: '#c7781c', fontSize : 21}}>
                                  Returns Management
                              </Text>
                          </View>
                          <View style={pages_style.searchBarWrap}>
                              <TextInput placeholder='Search by Customer No / Order No / Invoice No' style={pages_style.searchBar}></TextInput>
                          </View>
                      </Appbar> 
                      <ScrollView  contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
                        <View style={pages_style.homepage_box}>
                            <View style={{ justifyContent : 'flex-end', flexDirection : 'row', marginTop : 5 }}>
                                <TouchableOpacity style={styles.actionBtn}  onPress={this.showModal}>
                                    <Text component="span" style={styles.actionBtnText} >Create Returns</Text>
                                </TouchableOpacity>
                            </View>
                            <DataTable style={{ textAlign : 'left', flex : 1 }}>
                                <DataTable.Header style={{ backgroundColor : '#7c7355', color: '#fff',  }}>
                                    <DataTable.Title style={[styles.tableHead, {width : 20, flex : 1 }]} textStyle={{color : "#fff"}}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold'}}>S.No</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Product ID</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Reason For Return</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Payment Method</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Comments</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Product Img</Text>
                                    </DataTable.Title>
                                    <DataTable.Title numeric style={[styles.tableHead,{  justifyContent : 'center'}]}>
                                        <Text style={{ color : '#fff', fontWeight : 'bold' }}>Status</Text>
                                    </DataTable.Title>
                                </DataTable.Header>

                                
                                { returnsList.map((data,i) => (
                                    <DataTable.Row key={i}>
                                        <DataTable.Cell  style={[styles.tableCell, {flex : 1}]} >1</DataTable.Cell>
                                        <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>OD0001</DataTable.Cell>
                                        <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Mismatch</DataTable.Cell>
                                        <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Online Payment</DataTable.Cell>
                                        <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Ordered product are not same</DataTable.Cell>
                                        <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                            <Image style={{ width : 100, height : 100 }} source={{ uri :'https://cdn-icons-png.flaticon.com/512/1829/1829589.png' }} />
                                            <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 400, height: 400}} /> 
                                        </DataTable.Title>
                                        <DataTable.Cell numeric style={[styles.tableCell, {justifyContent : 'center'}]}>
                                            { data.status 
                                                ? <Text style={styles.StatusSucess} component="div">Returned</Text> 
                                                : <Text style={styles.StatusPending} >Pending</Text> 
                                            }
                                        </DataTable.Cell>
                                    </DataTable.Row>
                                ))}

                                {/* <DataTable.Pagination
                                    page={page}
                                    numberOfPages={3}
                                    onPageChange={(page) => setPage(page)}
                                    label="1-2 of 6"
                                    optionsPerPage={optionsPerPage}
                                    itemsPerPage={itemsPerPage}
                                    setItemsPerPage={setItemsPerPage}
                                    showFastPagination
                                    optionsLabel={'Rows per page'}
                                /> */}
                            </DataTable>   
                        </View>
                      </ScrollView>
                      
                                    {/* <View style={styles.container}> */}
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
                                    {/* </View> */}
                      <Modal contentContainerStyle={styles.returnsModal} visible={this.state.modalVisible} onDismiss={this.hideModal} overlayAccessibilityLabel={'Close'}>
                          <View style={ styles.modalHeader}>
                              <Text style={ styles.HeaderText}>Add Return Product</Text>
                          </View>
                          <View style={ styles.modalCont}>
                              <View>
                                  
                                  <TextInput
                                      style={ styles.formInput}
                                      label="Email"
                                      value=""
                                      placeholder ={'Reason for Return'}
                                      onChangeText={text => setText(text)}
                                  />
                                  <TextInput
                                      style={ styles.formInput}
                                      label="Email"
                                      value=""
                                      placeholder ={'Your Comments'}
                                      onChangeText={text => setText(text)}
                                  />
                              </View>  
                              
                              <Button title="Show me Camera"  /> 
                              <Button mode="contained" onPress={this.showCameraView}>CLick</Button>
                              <View style={{ justifyContent : 'flex-end', flexDirection : 'row', marginTop : 10 }}>
                                  <TouchableOpacity style={styles.submitRetutrnBtn}  >
                                      <Text component="span" style={styles.actionBtnText} >Submit</Text>
                                  </TouchableOpacity>
                              </View>
                          </View>
                      </Modal>

                  </ImageBackground>
              </View>
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