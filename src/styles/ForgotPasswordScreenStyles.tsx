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
        fontSize: 30,
        color: "white",
        marginBottom: 40,
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
    goBackButton: {
        backgroundColor: "#1c5c27",
    },
});