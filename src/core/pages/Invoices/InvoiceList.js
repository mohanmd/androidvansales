import React, {Fragment, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {  Toolbar, Modal,  ImageBackground, ScrollView, SafeAreaView ,  StyleSheet,TouchableOpacity, Text, View, Image, MenuIcon, TextInput, Grid } from "react-native";
import common_style from '../../../../assets/styles/common_style';
import pages_style from '../../../../assets/styles/pages_style';
import { Card, Button, Typography,Appbar, IconButton, Searchbar, DataTable } from 'react-native-paper';
import HeadeTop from '../component/HeaderTop';

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
        padding : 20,
        paddingHorizontal : 30,
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
    },
    actionBtn : {
        backgroundColor : '#ecb800',
        borderRadius : 4,
        paddingHorizontal : 30,
        paddingVertical : 10,
        marginLeft : 18
    },
    actionBtnText : {
        fontSize : 21,
        color :'#402608',
        fontWeight : 'bold',
    },
});

const optionsPerPage = [2, 3, 4];

export default function InvoiceList(props) {
    const {navigation} = props;
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

 
    const [search, setSearch] = React.useState('');
    const [filteredDataSource, setFilteredDataSource] =  React.useState([]);
    const [masterDataSource, setMasterDataSource] =  React.useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = masterDataSource.filter(function (item) {
            const itemData = item.title
              ? item.title.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          console.log(newData)
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };
    
      const ItemView = ({item}) => {
        return (
          // Flat List Item
          <Text
            style={styles.itemStyle}
            onPress={() => getItem(item)}>
              {item.id}
              {'.'}
              {item.title.toUpperCase()}
          </Text>
        );
      };
    
      const ItemSeparatorView = () => {
        return (
          // Flat List Item Separator
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8',
            }}
          />
        );
      };
    
      const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
      };

    const appbar = {
        backgroundColor: '#ffffffc4',
        paddingHorizontal : 10,
        justifyContent:'space-between',
        flexDirection : 'row',
        margin : 0,
        paddingVertical : 4,
        height: 60
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
            <View style={{flex: 1}}>
            <View style={styles.container}>
                <TextInput
                round
                searchIcon={{size: 24}}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Type Here..."
                value={search}
                />
                {/* <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                /> */}
            </View>
            </View>
            <View width="100%" height="100%" style={common_style.main_wrapper}>
                <ImageBackground source={require('../../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
                    <View  style={pages_style.container}>
                        
                        <HeadeTop  props={props} />
                        <Appbar position="static" color="default" style={appbar}>
                            <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                                <IconButton onPress={() => navigation.navigate('Home') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={21} color="#e09300"></IconButton>
                                <Text variant="h6" className={classes.title} style={{fontWeight : 'bold', color: '#c7781c', fontSize :21, marginLeft : 5}}>
                                   Invoice
                                </Text>
                            </View>
                            <View style={[pages_style.searchBarWrap, {maxWidth : 500}]}>
                                <TextInput placeholder='Search by Customer No / Order No / Invoice No' style={pages_style.searchBar}></TextInput>
                            </View>
                        </Appbar> 

                        <View style={styles.headerWrapper}>
                            <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>Customer Name:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>John Williams</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>Customer No:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>TN130002</Text>
                                </View>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>MTD Sales:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>2000</Text>
                                </View>
                                <View style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>Sales Order:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>Sameer</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>Sales Person:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>3000</Text>
                                </View>
                                <View  style={styles.tripCont}>
                                    <Text style={{ color : '#fff', fontSize : 18}}>Credit Balance:</Text>
                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 21 }}>4300</Text>
                                </View>
                            </View>
                        </View> 

                        <View style={pages_style.homepage_box}>
                            <View style={styles.container}>
                                    <View className="listview" >
                                        <DataTable style={{ textAlign : 'left' }}>
                                            <DataTable.Header style={{ backgroundColor : '#7c7355', color: '#fff',  }}>
                                                <DataTable.Title style={[styles.tableHead, {width : 20}]} textStyle={{color : "#fff"}}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18}}>S.No</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Article</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Lot No</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Description</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Unit Price</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Available Stock</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Quantity</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Discount %</Text>
                                                </DataTable.Title>
                                                <DataTable.Title numeric style={styles.tableHead}>
                                                    <Text style={{ color : '#fff', fontWeight : 'bold', fontSize : 18 }}>Total</Text>
                                                </DataTable.Title>
                                            </DataTable.Header>

                                            <DataTable.Row>
                                                <DataTable.Cell  style={[styles.tableCell, {width : 20}]} >1</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0001</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>3223233</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Product Description</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>434</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>40%</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>2250</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0002</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>3223232</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Product Description</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>540</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>4343</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>30%</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>1300</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0003</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>3223235</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Product Description</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>240</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>1222</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>20%</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>2500</DataTable.Cell>
                                            </DataTable.Row>

                                            <DataTable.Row>
                                                <DataTable.Cell  style={styles.tableCell}>2</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>OD0004</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>32232324</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>Product Description</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>4343</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>120</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>10%</DataTable.Cell>
                                                <DataTable.Cell numeric style={styles.tableCell}>2401</DataTable.Cell>
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
                                        
                                        
                                        <View style={pages_style.price_grid}>
                                            <View  style={pages_style.gridCol}>
                                                <Text style={{ fontWeight : 'bold', fontSize :18, color : '#fff'}}>Total SKU :  4</Text>
                                            </View>
                                            <View  style={pages_style.gridCol}>
                                                <Text style={{ fontWeight : 'bold', fontSize :18, color : '#fff'}}>Total Quantity :  400</Text>
                                            </View>
                                            <View  style={pages_style.gridCol}>
                                                <Text style={{ fontWeight : 'bold', fontSize :18, color : '#fff'}}>Invoice Discount :  0</Text>
                                            </View>
                                            <View  style={pages_style.gridCol}>
                                                <View  style={{ textAlign :'right', paddingRight : 26}}>
                                                    <Text style={{ fontWeight : 'bold', fontSize :21, color : '#ecb800'}}>Total :  $9000</Text>
                                                    <Text style={{ fontWeight : 'bold', fontSize :21, textAlign: 'right' ,color : '#fff'}}>Net :  $9000</Text>
                                                </View>
                                            </View>
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

                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}