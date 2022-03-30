import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    homepage_box : {
        minHeight: 'calc(100vh - 130px)',
        width: '100%',
        borderBottomRightRadius : '40px',
        padding : '30px',
        paddingTop : '9px',
        backgroundColor: '#fff6f6e3'
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
        paddingBottom : '2em',
        paddingTop : '30px'
    },
    searchBar : {
        backgroundColor: '#fff',
        padding: '10px',
        maxWidth: '400px',
        width: '100%',
    },
    orderList : {
        flex : 1,
        flexDirection : 'row',
        gap: '40px',
        rowGap: 0,
        alignItems : 'flex-start',  
        paddingTop : '40px',
        paddingLeft : '20px',
        paddingRight : '20px',
        flexWrap : 'wrap'
    },
    listItem : {
        maxWidth : '300px'
    },
    price_grid : {
        backgroundColor: "#5f615e",
        height: "74px",
        justifyContent: "center",
    },
    save_cancel_btn_view:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

});