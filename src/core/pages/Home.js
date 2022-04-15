import React , { Component, Fragment }  from 'react'
import { ImageBackground ,SafeAreaView, ScrollView , StyleSheet, Text, View, Image ,TouchableOpacity, TextInput ,Alert } from "react-native";
import { Button, IconButton  } from 'react-native-paper' 
import common_style from '../../../assets/styles/common_style';
import homepage_style from '../../../assets/styles/homepage_style.js';
import HeaderTop from './component/HeaderTop';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({...props}) {
     const { navigation } = props;
    
     const logout = async ()=>{
        try {
            await AsyncStorage.removeItem('user1');
            console.log('user Logg off');
            navigation.navigate('Login');
        }
        catch(exception) {
            console.log(exception);
        }
    }

    return(
    <ScrollView  width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            {/* <View style={{ height : 80, paddingHorizontal : 20, paddingTop : 16, paddingBottom : 40, flexDirection : 'row', justifyContent : 'space-between'  }}>
                <Image source={require('../../../assets/images/van_logo.png')} style={{width: 130, height:50}} />
                <IconButton onPress={() => logout() }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/450/450387.png' }} size={21} color="#fff"></IconButton>
            </View> */}
            <HeaderTop props={props}/>
            <View  style={common_style.container}>
                {/* <Header /> */}
                <View style={homepage_style.homepage_box}>
                    <View style={homepage_style.nameBox}>
                        <Text style={homepage_style.nameBox1}><Text>Welcome</Text> <Text style={homepage_style.nameTitle}>Mr. Shabbir Semari</Text></Text>
                    </View>
                    <View style={homepage_style.container}>
                        <View style={homepage_style.first_col}> 
                            <Text style={common_style.heading}>SAP {'\n'}Van Sales{'\n'} &{'\n'}Distribution</Text>
                            <Text style={common_style.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                            <Text style={common_style.para}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                        </View>
                        <View style={homepage_style.snd_col}>
                            <View style={homepage_style.menu}>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/user.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>User{'\n'}Management</Text></View>

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/enquiry.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Inquiry {'\n'}Order Booking</Text></View>

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/material.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Material{'\n'}Management</Text></View>

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/customer.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Customer{'\n'}Management</Text></View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={homepage_style.menu}>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/truck.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Truck{'\n'}Management</Text></View>

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}  onPress={() => navigation.navigate('PinDrop') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/route.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Route{'\n'}Management</Text></View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}  onPress={() => navigation.navigate('invoicelist') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/delivery.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Delivery{'\n'}Invoice</Text></View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView} onClick={() => navigation.navigate('Orderlist') } >
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/spotsale.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Spot Sales{'\n'} </Text></View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={homepage_style.menu}  >
                                <TouchableOpacity style={homepage_style.tileView} onPress={() => navigation.navigate('collection') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/collection_management.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Collection{'\n'}Management</Text></View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}  onPress={() => navigation.navigate('DeliveryList') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/delivery_planing.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Delivery{'\n'}Planing</Text></View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView} onPress={() => navigation.navigate('Returns') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/returns_management.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Returns{'\n'}Management</Text></View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../../assets/images/icons/spot_purchase.png')} style={{width: 80, height:60}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Spot{'\n'}Purchase</Text></View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
            </View>
        </ImageBackground>


    </ScrollView>
    )
}