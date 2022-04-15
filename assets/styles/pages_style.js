import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    homepage_box : {
        width: '100%',
        borderBottomRightRadius : 40,
        padding : 30,
        paddingTop : 9,
        backgroundColor: '#fff6f6e3',
        flex : 1,
        overflow : 'scroll'
    },
    navbar : {
        height : '60px',
    },
    container :{
        flex: 1,
        margin: 'auto',
        width: '100%',
        height: '100%',
    },
    main_wrapper : {
        height: '100%',
    },
    image:{
        flex : 1,
        justifyContent:'center',
        height: '100%',
        paddingBottom : 30,
        paddingTop : 30
    },
    searchBar : {
        backgroundColor: '#fff',
        padding: 9,
        maxWidth: 800,
        width: '100%',
        paddingHorizontal : 16,
        fontSize : 19,
        borderRadius : 3
    },
    searchBarWrap : {
        maxWidth : 400,
        width : '100%'
    },  
    orderList : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'flex-start',  
        paddingTop : 20,
        paddingLeft : 10,
        paddingRight : 10,
        flexWrap : 'wrap',
        overflow : 'scroll'
    },
    listItem : {
        maxWidth : '300px'
    },
    price_grid : {
        backgroundColor: "#5f615e",
        height: 80,
        justifyContent: "flex-end",
        flexDirection : 'row',
        paddingHorizontal : 4,
        paddingTop : 10,
        marginTop : 20
    },
    gridCol : {
        paddingHorizontal : 16
    },
    save_cancel_btn_view:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

});