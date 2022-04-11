import { StyleSheet, Dimensions } from 'react-native';

const wHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    navbar : {
        height : '60px',
    },
    navbarInner : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingRight : 35
    },
    headerMenu : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'end',
        // gap : '20px'
    },
    headerLink : {
        fontSize : 14,
        color : '#fff'
    },
    container :{
        flex: 1,
        margin: 'auto',
        width: '100%',
        height: '100%',
        paddingLeft: 25,
        paddingRight: 0
    },
    main_wrapper : {
        height: '100%',
    },
    image:{
        flex : 1,
        justifyContent:'center',
        height: wHeight - 23,
    },
    leftCol : {
        width : '50%',
    },
    heading : {
        textAlign : 'center',
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom : 20,
        color : '#000'
    },  
    para : {
        marginBottom :15,
        color : '#444',
        fontSize : 16
    },
 
});