import React, {Fragment} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {  Toolbar, Modal,  ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View, Image, MenuIcon, TextInput, Grid } from "react-native";
import common_style from '../../../../assets/styles/common_style';
import pages_style from '../../../../assets/styles/pages_style';
import { Card, Button, Typography,Appbar, IconButton, Searchbar, DataTable  } from 'react-native-paper';

const useStyles = makeStyles((theme) => ({
    input: {
      color: "#fff"
    },  
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        paddingVertical : 5
    },
    headerWrapper : {
        backgroundColor : '#5f605e',
        padding : 7,
        paddingHorizontal : 20,
        textAlign : 'center'
    },
    tripCont : {
        // width : '100%'
    },
    searchBar : {
        maxWidth : 300,
        width : '100%'
    },
    tabContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingVertical : 5,
        paddingHorizontal : 10,
        backgroundColor : '#3d3d3d'
    },
    tab : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    SearchbarInout : {
        paddingHorizontal : 15,
        paddingVertical : 0,
        backgroundColor : '#808080',
        color : '#fff',
        width: '100%',
        lineHeight : 1,
        borderWidth : 1,
        borderColor : '#8f8f8f',
        borderRadius : 5
    },
    tabBtns : {
        fontSize : 11,
        color : '#fff',
        textTransform : 'capitalize',
        paddingHorizontal : 10,
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
    actionBtn : {
        backgroundColor : '#ecb800',
        borderRadius : 4,
        paddingHorizontal : 25,
        paddingVertical : 5,
        marginLeft : 10
    },
    actionBtnText : {
        fontSize : 13,
        color :'#402608',
        fontWeight : 'bold',
    }
});

const optionsPerPage = [2, 3, 4];

export default function CollectionList({navigation}) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    const [check, setCheck] =  React.useState(false);

    const toggleChecked = () => {
        setCheck(value => !value)
    };

    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

    const navbar = {
        alignItems : 'center', 
        flexDirection : 'row', 
        justifyContent:'space-between',
        paddingHorizontal : 10,
        paddingVertical : 5
    }

    const appbar = {
        backgroundColor: '#ffffffc4',
        paddingHorizontal : 10,
        justifyContent:'space-between',
        flexDirection : 'row',
        margin : 0,
        paddingVertical : 0,
        height: 37
    }
    
    let tabTextC = {
        color : '#fff',
        fontWeight : 'bold'
    }
    let tabText = {
        fontSize : check ? 16 : 12,
        opacity : check ? 1 : 0.8,
    }
    let tabText1 = {
        fontSize : check ? 12 : 16,
        opacity : check ? 0.8 : 1,
    }
    return (
        <ScrollView  width="100%" height="100%" style={common_style.main_wrapper}>
            <View width="100%" height="100%" style={common_style.main_wrapper}>
                <ImageBackground source={require('../../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
                    <View  style={pages_style.container}>
                        <View  style={navbar}>
                            <View >
                                <Image source={require('../../../../assets/images/van_logo.png')} style={{width: 120, height:50}} />
                            </View>
                            <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                                <Text style={{ color : '#fff'}}> <Text style={{ fontSize : 8 }}>Welcome</Text> <Text style={{ fontSize : 12, fontWeight : '600' }}> Hari</Text></Text>
                            </View>
                        </View>
                        <Appbar position="static" color="default" style={appbar}>
                            <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                                <IconButton onPress={() => navigation.navigate('Home') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={17} color="#e09300"></IconButton>
                                <Text variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize : 17}}>
                                    Cash Collection
                                </Text>
                            </View>
                        </Appbar> 

                        <View style={styles.headerWrapper}>
                            <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>Customer Name:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>John Williams</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>Customer No:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>TN130002</Text>
                                </View>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>MTD Sales:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>Sales</Text>
                                </View>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>Sales Person:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>Sameer</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>Balance Amount:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>3000</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 14}}>Balance Amount Recived:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 16 }}>4300</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.tabContainer}>
                            <View style={styles.tab}>
                                <TouchableOpacity  style={ styles.tabBtns } onPress={toggleChecked}>
                                    <Text component="span" style={[tabText1, tabTextC]}>List View</Text>
                                </TouchableOpacity><Text style={{ fontSize : 16, color : '#fff' }}>/</Text>
                                <TouchableOpacity  style={ styles.tabBtns } onPress={toggleChecked}>
                                    <Text  component="span" style={[tabText, tabTextC]}>Map View</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.searchBar}>
                                <TextInput style={styles.SearchbarInout} color="#ffff"  placeholderTextColor="#acacac"   labelStyle={{ color: "white", fontSize: 16 }} icon={{uri :'https://cdn-icons.flaticon.com/png/512/2811/premium/2811806.png?token=exp=1648803760~hmac=06ef013f5fdb53cb2245427b2fa4f14b'}}  placeholder="Search"/>
                            </View>
                        </View>

                        <View style={pages_style.homepage_box}>
                            <View style={styles.container}>
                                    <View className="listview"   style={check && { display: 'none' }}>
                                        <DataTable style={{ textAlign : 'left', flex : 1 }}>
                                            <DataTable.Header style={{ backgroundColor : '#7c7355', color: '#fff',  }}>
                                                <DataTable.Title style={styles.tableHead} textStyle={{color : "#fff"}}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold'}}>S.No</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Order Number</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Customer Name</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Customer City</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Mobile Number</Text>
                                                </DataTable.Title>
                                            </DataTable.Header>

                                            <DataTable.Row>
                                                <DataTable.Cell  style={styles.tableCell}>1</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0001</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>John William</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Austin</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>98765432</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0002</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>David Willy</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Boston</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>932323232</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0003</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Will Smith</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Chicago</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>98765124</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell  style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0004</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Mark</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Los Angeles</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>98765445</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Pagination
                                                page={page}
                                                numberOfPages={3}
                                                onPageChange={(page) => setPage(page)}
                                                label="1-2 of 6"
                                                optionsPerPage={optionsPerPage}
                                                itemsPerPage={itemsPerPage}
                                                setItemsPerPage={setItemsPerPage}
                                                showFastPagination
                                                optionsLabel={'Rows per page'}
                                            />
                                        </DataTable>
                                        <View style={{ justifyContent : 'flex-end', flexDirection : 'row' }}>
                                            <TouchableOpacity style={{ maxWidth : 120, width : '100%' }}>
                                                <Text style={{ textAlign : 'right', color : 'blue' }}>+ Add Order</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ justifyContent : 'flex-end', flexDirection : 'row', marginTop : 30 }}>
                                            <TouchableOpacity style={styles.actionBtn}>
                                                <Text component="span" style={styles.actionBtnText}>Save</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.actionBtn}>
                                                <Text component="span" style={styles.actionBtnText}>Print Loading Sheet</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>  

                                    <View className="mapview" style={!check && { display: 'none' }}>
                                        <Text>Map View</Text>
                                    </View> 
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}