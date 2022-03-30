import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    navbar : {
        height : '60px',
    },
    navbarInner : {
        flex : '1',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingRight : '35px'
    },
    headerMenu : {
        flex : '1',
        flexDirection : 'row',
        justifyContent : 'end',
        gap : '20px'
    },
    headerLink : {
        fontSize : '14px',
        color : '#fff'
    },
    container :{
        flex: 1,
        margin: 'auto',
        maxWidth : '1100px',
        width: '100%',
        height: '100%',
        paddingLeft: '25px',
        paddingRight: '0px'
    },
    main_wrapper : {
        height: '100%',
    },
    image:{
        flex : 1,
        justifyContent:'center',
        height: '100%',
        paddingBottom : '2em',
        paddingTop : '30px'
    },
    leftCol : {
        width : '50%',
    },
    heading : {
        textAlign : 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom : '20px'
    },  
    para : {
        marginBottom :'15px',
        color : '#444'
    },
 
});