import React , { Component, Fragment }  from 'react'
import { ImageBackground ,SafeAreaView, ScrollView , StyleSheet, Text, View, Image , TextInput ,Alert } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from 'formik'
import * as yup from 'yup';
import { Button  } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';




const HeaderButton = ({ handleSubmit, navigation }) => {
  React.useLayoutEffect(() => {
   navigation.setOptions({
     headerRight: () => <Button onPress={handleSubmit} title='Update' />,
     });
  }, [navigation, handleSubmit]);

   return (<></>);

}




export default function Login({navigation}) {
  const fieldRef = React.createRef();

 // const [text, onChangeText] = React.useState("");

  const [username, setUsername] = React.useState("dsf");
  const [password, setpassword] = React.useState(null);

  const inputStyle = {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 2,
    paddingLeft : 15,
    paddingHorizontal : 5,
    borderRadius : 8,
    marginBottom: 5,
    fontSize: 10,
    borderColor : '#fff',
    color : '#fff',
  };

  const goHome = () =>{
    // alert('Your Logged In');
    navigation.navigate('Home');
  }
  const onsubmit = values => {
    console.log('submitting form', values)
  }
  const onSubmit = data => console.log(data)



  return (
    <SafeAreaView >
    <ScrollView width="100%" height="100%" style={styles.main_wrapper}>
      <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" style={styles.image} >
        <View  style={styles.container}>
          <View style={styles.navbar}>
            <Image source={require('../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
          </View>
          <View style={styles.loginBox}>
              <View style={styles.leftCol}>
                <Text style={styles.heading}>SAP {"\n"}Van Sales {"\n"}& {"\n"}Distribution</Text>
                <Text style={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                <Text  style={styles.para}>Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived
not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. </Text>
                
              </View>
               <View style={styles.rightCol}>   
                <View style={styles.innerBox}>
                  <View style={styles.darkbox}> 
                    <View>
                        <Text style={{ fontSize : 18, color: '#fff', paddingBottom:10 }}>Login</Text>
                    <Formik
                          onSubmit={values => console.log(values)}
                          initialValues={{  
                        email: '', 
                        password: '' 
                      }}

                    validationSchema={yup.object().shape({
                      email: yup
                        .string()
                        .email()
                        .required(),
                      password: yup
                        .string()
                        .min(4)
                        .max(10, 'Password should not excced 10 chars.')
                        .required(),
                    })}
                  >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View  >        
            <View >
              <TextInput
                value={values.email}
                style={inputStyle}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                placeholderTextColor={'#fff'}
              />
              {touched.email && errors.email &&
                <Text style={{ fontSize: 8, color: '#FF0D10', paddingBottom:10  }}>{errors.email}</Text>
              }
              <TextInput
                value={values.password}
                style={inputStyle}
                onChangeText={handleChange('password')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')} 
                secureTextEntry={true}
                placeholderTextColor={'#fff'}
              
              />
              {touched.password && errors.password &&
                <Text style={{ fontSize: 8, color: '#FF0D10' }}>{errors.password}</Text>
              }
            </View>

            <View style={styles.loginButtons}>
              <Button  onPress={() => goHome()} labelStyle={{fontSize: 10}} color='#fbac00' style = {{textTransform: 'capitalize', fontSize : 9}} >Login</Button>
              <Button onPress={handleSubmit}   labelStyle={{fontSize: 10}}  color='#fbac00'  style = {{textTransform: 'capitalize'}} >Signup</Button>
            </View>
            
                  
          </View>
          
        )}
        
      </Formik>
                    
                    </View>
                    
                  </View>
                </View>
              </View> 
          </View>
        </View>
        </ImageBackground>


    </ScrollView>
  </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  buttonColor : {
    color : '#fbac00'
  },  
    loginBox : {
      width: '100%',
      backgroundColor : '#fff',
      borderTopLeftRadius : 40,
      borderBottomRightRadius : 40,
      flex : 1,
      flexDirection : 'row',
      alignItems : 'center',
      paddingTop : 30,
      paddingHorizontal : 10
      // padding : 30
    },
    leftCol : {
      width : "50%",
      paddingHorizontal : 20,
      paddingLeft : 30
    },
    rightCol : {
      width : "50%",
      padding : 40, 
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    },
    innerBox :{
      backgroundColor : '#f5f5f5',
      padding :20,
      borderRadius : 13,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      width : '100%'
    },
    darkbox : {
      backgroundColor : '#444',
      // height : '100%',
      borderTopLeftRadius : 20,
      borderBottomRightRadius : 20,
      padding : 30,
      paddingHorizontal : 15,
      justifyContent :'space-between',
      flexDirection : 'column'
    },  
    loginTitle : {
      fontSize : 30,
      color :'#fff'
    },  
    loginButtons : {
      flexDirection: 'row',
      width : 200,
      paddingTop : 2,
      alignItems : 'center',
      justifyContent : 'center',
      paddingTop : 10
    },  
    heading : {
      textAlign : 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom : 20,
      color: '#000',
    },  
    image:{
      flex : 1,
      justifyContent:'center',
      height: '100%',
      // paddingBottom : 12,
      // paddingTop : 30,
      width : '100%',
    },
    main_wrapper : {
      height: '100%',
      backgroundColor : '#eee'
    },
    container :{
      flex: 1,
      maxWidth: 1100,
      margin: 'auto', 
      width: '100%',
      height: '100%',
      padding : 20,
      paddingLeft :25,
      paddingRight :25
    },
    navbar : {
      height : 60,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    para : {
      marginBottom :15,
      fontSize : 11
    },
  });
