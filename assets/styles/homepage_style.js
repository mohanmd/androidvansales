import { withTheme } from '@material-ui/core';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    homepage_box : {
        height : '100%',
        width: '100%',
        borderTopLeftRadius : 40,
        borderBottomRightRadius : 40,
        flex : 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        padding : 30,
        paddingTop : 9,
        backgroundColor: '#fff6f6e3',
        marginBottom : 40
    },
    tileView : {
        flex : 3,
        margin : 5,
        // height : 100
    },
    nameBox : {
        // flex : 1,
        // height : 100,
        width : '100%',
        justifyContent : 'flex-end',
        textAlign : 'right',
        paddingRight : 25,
        flexDirection : 'row'
    },  
    nameTitle : {
        color : '#c6771c',
        fontSize : 22,
        textTransform : 'capitalize'
    },
    nameBox1 : {
        paddingBottom : 10
    } ,
    container : {
        flex: 1,       
        flexDirection: "row",
        justifyContent : 'center',
        alignItems : 'center',
        // height : 600
    },
    first_col:{
        paddingVertical: 0,
        paddingHorizontal: 33,
        flex:3,
        height: '100%',
        justifyContent : 'center'
    },
    snd_col:{
        flex:6,
        maxWidth : 600,
        paddingLeft : 30,
        paddingRight : 30,
        height : 450
    },
    menu:{
        flex: 1,       
        flexDirection: "row",  
        marginBottom:10,
        marginTop : 10,
        alignItems : 'center'
    },
    menu_col:{
        flex: 1,       
        flexDirection: "column", 
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        backgroundColor:'white',
        overflow:'hidden',
        // border: '1px solid #cecece'
    },
    menu_icon:{
        flex:2,
        justifyContent:'center',
        paddingBottom : 10,
        height : '100%',
        paddingTop : 5
    },
    menu_text:{
        width: '100%',
        height : '100%',
        backgroundColor:'#585858',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding : 5
    },
    menu_word:{
        color:'white',
        fontWeight:'400',
        lineHeight : 15,
        fontSize : 13,
        textAlign:'center'
    }
   
   
 
});