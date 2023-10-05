import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    inputView: {
      width: "80%",
      backgroundColor: "#848a94",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    forgotAndSignUpText: {
      color: "white",
      fontSize: 11
    },
    btnElement: {
      color: 'white',
      borderRadius: 25,
      height: 50,
      width: 150,
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    },
    loginButton: {
      backgroundColor: "#1c5c27",
    },
    forgotButton: {
      backgroundColor: "#1a2e2e",
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });