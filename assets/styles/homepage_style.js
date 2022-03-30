import { withTheme } from '@material-ui/core';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    homepage_box : {
        height: 'calc(100vh - 130px)',
        width: '100%',
        borderTopLeftRadius : '40px',
        borderBottomRightRadius : '40px',
        // flex : 1,
        // flexDirection : 'row',
        // alignItems : 'center',
        padding : '30px',
        paddingTop : '9px',
        backgroundColor: '#fff6f6e3'
    },
    tileView : {
        flex : 3,
    },
    nameBox : {
        textAlign : 'right',
        paddingRight : '25px'
    },  
    nameTitle : {
        color : '#c6771c',
        fontSize : '17px'
    },
    nameBox1 : {
        paddingBottom : '10px'
    } ,
    container : {
        flex: 1,       
        flexDirection: "row",
        justifyContent : 'center',
        alignItems : 'center',
    },
    first_col:{
        paddingVertical: 0,
        paddingHorizontal: 33,
        flex:3
    },
    snd_col:{
        flex:6,
        maxWidth : '600px',
        paddingLeft : '30px',
        paddingRight : '30px',
    },
    menu:{
        flex: 1,       
        flexDirection: "row",  
        marginBottom:'15px',
        marginTop : '15px',
        gap : '30px'
    },
    menu_col:{
        flex: 1,       
        flexDirection: "column", 
        justifyContent:"center",
        alignItems:"center",
        borderRadius:'16px',
        backgroundColor:'white',
        overflow:'hidden',
        border: '1px solid #cecece'
    },
    menu_icon:{
        flex:2,
        justifyContent:'center',
        paddingBottom : '10px',
        paddingTop : '10px'
    },
    menu_text:{
        width: '100%',
        backgroundColor:'#585858',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       padding : '10px'
    },
    menu_word:{
        color:'white',
        fontWeight:'400',
        lineHeight : '15px',
        fontSize : '13px',
        textAlign:'center'
    }
   
   
 
});