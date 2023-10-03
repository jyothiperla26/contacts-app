/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import {
    StyleSheet,
} from 'react-native';
  

export const styles = StyleSheet.create({
    headersHeading:{
        fontFamily:"Roboto",
        fontSize:25,
        fontWeight:'bold',
    },
    HeadersParaElement:{
        color:'darkgrey',
        fontSize:13,
    },
    flexRow: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnFlex:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    flexColumn:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight:10,
    },
    inputBox:{
        height:30,
        width:150,
        padding:5,
        marginBottom:20,
        marginTop:0,
    },
    alignButtons:{
        textAlign: 'right',
    },
    cancelButton:{
        height:40,
        width:100,
        padding:10,
        fontWeight: 'bold',
        marginRight:10,
    },
    createUserButton:{
        height:40,
        width:100,
        padding:10,
        fontWeight: 'bold',
        backgroundColor: 'black',
        color:'white',
        marginRight:10,
    }
});