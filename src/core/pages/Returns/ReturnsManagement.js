import React, {Fragment} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar,ImageBackground, ScrollView, StyleSheet,TouchableOpacity, Text, View, Image,TextInput,  MenuIcon, Grid } from "react-native";
import common_style from '../../../../assets/styles/common_style';
import pages_style from '../../../../assets/styles/pages_style';
import { Card, Button, Typography,Appbar, IconButton, DataTable, Modal  } from 'react-native-paper';
import { CameraPage } from '../../camera';
import HeadeTop from '../component/HeaderTop';


const styles = StyleSheet.create({
    navbar : {
        alignItems : 'center', 
        flexDirection : 'row', 
        justifyContent:'space-between',
        paddingHorizontal : 10,
        paddingVertical : 5
    },
    actionBtn : {
        backgroundColor : '#ecb800',
        borderRadius : 4,
        paddingHorizontal : 25,
        paddingVertical : 5,
        marginBottom : 10
    },
    actionBtnText : {
        fontSize : 14,
        color :'#402608',
        fontWeight : 'bold',
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
    flex2 : {
        flex : 1,
        justifyContent : 'center',
    },
    StatusSucess : {
        color : '#09af00',
        borderRadius : 20,
        padding: 10,
        width : 180,
        fontSize : 13,
        fontWeight : 'bold'
    },
    StatusPending : {
        color : '#ff8100',
        borderRadius : 20,
        padding: 10,
        width : 180,
        fontSize : 13,
        fontWeight : 'bold'
    },
    returnsModal : {
        maxWidth : 500,
        height : 'auto',
        width : '100%',
        borderRadius : 10,
        backgroundColor : '#fff',
        margin : 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        overflow : 'hidden'
    },
    modalHeader : {
        backgroundColor : '#444',
        color : '#fff',
        padding : 10,
    },
    HeaderText : {
        fontWeight : 'bold',
        color : '#fff'
    },
    modalCont : {
        padding : 15,
        paddingHorizontal : 20
    },
    formInput : {
        borderWidth : 1,
        borderColor : '#ccc',
        paddingVertical : 1,
        paddingHorizontal : 10,
        fontSize: 11,
        marginBottom : 10,
        borderRadius : 5
    },
    submitRetutrnBtn : {
        backgroundColor : '#ecb800',
        borderRadius : 4,
        paddingHorizontal : 25,
        paddingVertical : 5,
        marginLeft : 10,
        marginBottom : 15,
        width : 'auto'
    },
    appbar : {
        backgroundColor: '#ffffffc4',
        paddingHorizontal : 10,
        justifyContent:'space-between',
        flexDirection : 'row',
        margin : 0,
        paddingVertical : 0,
        height: 70
    }
})

const returnsList = [
    {'id' : '001', 'status' : 1},
    {'id' : '002', 'status' : 0},
    {'id' : '002', 'status' : 1},
    {'id' : '002', 'status' : 0},
    {'id' : '002', 'status' : 1},
    {'id' : '002', 'status' : 1},
]

const optionsPerPage = [2, 3, 4];

export default function ReturnsManagement({navigation}) {
    const [text, setText] = React.useState("");
    const [selected2, setSelectedValue] = React.useState("Cash");
    const [visible, setVisible] = React.useState(false);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    // const containerStyle = {backgroundColor: 'white', padding: 20};

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

   

    return(
        <ScrollView  width="100%" height="100%" style={common_style.main_wrapper}>
            <View width="100%" height="100%" style={common_style.main_wrapper}>
                <ImageBackground source={require('../../../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>

                    <HeadeTop />
                    <Appbar position="static" color="default" style={styles.appbar}>
                        <View style={{ flexDirection : 'row', alignItems : 'center' }}>
                            <IconButton onPress={() => navigation.navigate('Home') }  icon={{ uri :'https://cdn-icons-png.flaticon.com/512/1828/1828859.png' }} size={22} color="#e09300"></IconButton>
                            <Text variant="h6"   style={{fontWeight : 'bold', color: '#c7781c', fontSize : 21}}>
                                Returns Management
                            </Text>
                        </View>
                        <View style={pages_style.searchBarWrap}>
                            <TextInput placeholder='Search by Customer No / Order No / Invoice No' style={pages_style.searchBar}></TextInput>
                        </View>
                    </Appbar> 

                    <View style={pages_style.homepage_box}>
                        <View style={{ justifyContent : 'flex-end', flexDirection : 'row', marginTop : 5 }}>
                            <TouchableOpacity style={styles.actionBtn}  onPress={showModal}>
                                <Text component="span" style={styles.actionBtnText} >Create Returns</Text>
                            </TouchableOpacity>
                        </View>
                        <DataTable style={{ textAlign : 'left', flex : 1 }}>
                            <DataTable.Header style={{ backgroundColor : '#7c7355', color: '#fff',  }}>
                                <DataTable.Title style={[styles.tableHead, {width : 20, flex : 1 }]} textStyle={{color : "#fff"}}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold'}}>S.No</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Product ID</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Reason For Return</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Payment Method</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Comments</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Product Img</Text>
                                </DataTable.Title>
                                <DataTable.Title numeric style={[styles.tableHead,{  justifyContent : 'center'}]}>
                                    <Text style={{ color : '#fff', fontWeight : 'bold' }}>Status</Text>
                                </DataTable.Title>
                            </DataTable.Header>

                            
                            { returnsList.map((data,i) => (
                                <DataTable.Row key={i}>
                                    <DataTable.Cell  style={[styles.tableCell, {flex : 1}]} >1</DataTable.Cell>
                                    <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>OD0001</DataTable.Cell>
                                    <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Mismatch</DataTable.Cell>
                                    <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Online Payment</DataTable.Cell>
                                    <DataTable.Cell numeric style={[styles.tableCell, styles.flex2]}>Ordered product are not same</DataTable.Cell>
                                    <DataTable.Title numeric style={[styles.tableHead, styles.flex2]}>
                                        <Image style={{ width : 100, height : 100 }} source={{ uri :'https://cdn-icons-png.flaticon.com/512/1829/1829589.png' }} />
                                        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} /> 
                                    </DataTable.Title>
                                    <DataTable.Cell numeric style={[styles.tableCell, {justifyContent : 'center'}]}>
                                        { data.status 
                                            ? <Text style={styles.StatusSucess} component="div">Returned</Text> 
                                            : <Text style={styles.StatusPending} >Pending</Text> 
                                        }
                                    </DataTable.Cell>
                                </DataTable.Row>
                            ))}

                            {/* <DataTable.Pagination
                                page={page}
                                numberOfPages={3}
                                onPageChange={(page) => setPage(page)}
                                label="1-2 of 6"
                                optionsPerPage={optionsPerPage}
                                itemsPerPage={itemsPerPage}
                                setItemsPerPage={setItemsPerPage}
                                showFastPagination
                                optionsLabel={'Rows per page'}
                            /> */}
                        </DataTable>
                    </View>

                    <Modal contentContainerStyle={styles.returnsModal} visible={visible} onDismiss={hideModal} overlayAccessibilityLabel={'Close'}>
                        <View style={ styles.modalHeader}>
                            <Text style={ styles.HeaderText}>Add Return Product</Text>
                        </View>
                        <View style={ styles.modalCont}>
                            <View>
                                
                                <TextInput
                                    style={ styles.formInput}
                                    label="Email"
                                    value={text}
                                    placeholder ={'Reason for Return'}
                                    onChangeText={text => setText(text)}
                                />
                                <TextInput
                                    style={ styles.formInput}
                                    label="Email"
                                    value={text}
                                    placeholder ={'Your Comments'}
                                    onChangeText={text => setText(text)}
                                />
                            </View>  
                            <View style={{ justifyContent : 'flex-end', flexDirection : 'row', marginTop : 10 }}>
                                <TouchableOpacity style={styles.submitRetutrnBtn}  >
                                    <Text component="span" style={styles.actionBtnText} >Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </ImageBackground>
            </View>
        </ScrollView>
    )
}