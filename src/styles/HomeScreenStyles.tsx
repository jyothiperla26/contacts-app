import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contactsContainer:{
        backgroundColor: '#54384c',
        margin:15,
        borderRadius:10,
        width:'90%',
    },
    eachContact: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        margin:15,
        backgroundColor: '#c7ede9',
        width:'90%',
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        marginBottom: 40,
    },
    getContactsButton: {
        color: 'white',
        borderRadius: 25,
        height: 50,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: "#1c5c27",
    },

});