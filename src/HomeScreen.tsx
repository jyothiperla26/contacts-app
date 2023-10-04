import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
} from 'react-native';
// import {AsyncStorage} from 'react-native';
//import EncryptedStorage from 'react-native-encrypted-storage';

const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };
let username: string;
// const getUser = async () => {
//     try {
//       username = JSON.parse(await EncryptedStorage.getItem("username"))
//     } catch (error) {
//      console.log(error); 
//     }
// };
  

function HomeScreen({ navigation }: { navigation: any }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Welcome Hiiii</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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

});

export default HomeScreen;