import React , { Component, Fragment }  from 'react'
import { ImageBackground, Button ,SafeAreaView , StyleSheet, Text, View, Image , TextInput ,Alert } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from 'formik'
import * as yup from 'yup'




const useStyles = makeStyles({
  buttonColor : {
    color : '#fbac00'
  },  
    loginBox : {
      height: 'calc(100vh - 130px)',
      width: '100%',
      backgroundColor : '#fff',
      borderTopLeftRadius : '40px',
      borderBottomRightRadius : '40px',
      flex : 1,
      flexDirection : 'row',
      alignItems : 'center',
      padding : '30px'
    },
    leftCol : {
      width : '50%',
      paddingLeft : '2em',
      paddingRight : '2em'
    },
    rightCol : {
      width : '50%',
      height : '100%',
      padding : '40px',
      flex : '1',
      alignItems : 'center',
      justifyContent : 'center'
    },
    innerBox :{
      backgroundColor : '#f5f5f5',
      padding : '20px',
      borderRadius : '13px',
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
      height : '100%',
      borderTopLeftRadius : '20px',
      borderBottomRightRadius : '20px',
      padding : '30px',
      justifyContent :'space-between',
      flexDirection : 'column'
    },  
    loginTitle : {
      fontSize : '30px',
      color :'#fff'
    },  
    loginButtons : {
      flex : 1,
      flexDirection : 'row',
      width : '100%',
      justifyContent : 'center',
      color : '#f00',
      height : '50px',
      paddingTop : '20px',
      alignItems : 'center'
    },  
    heading : {
      textAlign : 'center',
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom : '20px'
    },  
    image:{
      flex : 1,
      justifyContent:'center',
      height: '100%',
      paddingBottom : '2em',
      paddingTop : '30px',
      width : '100%'
    },
    main_wrapper : {
      height: '100%',
    },
    container :{
      flex: 1,
      maxWidth: '1100px',
      margin: 'auto', 
      width: '100%',
      height: '100%',
      paddingLeft :'25px',
      paddingRight :'25px'
    },
    navbar : {
      height : '60px'
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
      marginBottom :15
    },
    input: {
      color: "#fff"
    }
});

const HeaderButton = ({ handleSubmit, navigation }) => {
  React.useLayoutEffect(() => {
   navigation.setOptions({
     headerRight: () => <Button onPress={handleSubmit} title='Update' />,
     });
  }, [navigation, handleSubmit]);

   return (<></>);

}




export default function Login({navigation}) {
  const styles = useStyles();
  const fieldRef = React.createRef();

 // const [text, onChangeText] = React.useState("");

  const [username, setUsername] = React.useState("dsf");
  const [password, setpassword] = React.useState(null);

  const inputStyle = {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
  };

  const onsubmit = values => {
    console.log('submitting form', values)
  }
  const onSubmit = data => console.log(data)



  return (
    <View width="100%" height="100%" className={styles.main_wrapper}>
      <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" className={styles.image} >
        <View  className={styles.container}>
          <View className={styles.navbar}>
            <Image source={require('../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
          </View>
          <View className={styles.loginBox}>
              <View className={styles.leftCol}>
                <Text className={styles.heading}>SAP Distribution</Text>
                <Text className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                
              </View>
              <View className={styles.rightCol}>   
                <View className={styles.innerBox}>
                  <View className={styles.darkbox}>
                    <View>
                      
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
          <View style={styles.formContainer}>        
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
            }
            <TextInput
              value={values.password}
              style={inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            }

                  <View style={styles.loginButtons}>
                      <Button  onClick={() => navigation.navigate('Home') }  style = {{color:'#fbac00', height : '40px'}} title="Login"/>
                      <Button onPress={handleSubmit} style = {{color:'#fbac00', height : '40px'}} title="Signup"/>
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


    </View>

  )
}



