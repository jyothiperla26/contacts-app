import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
} from 'react-native';
import {styles} from './styles/ForgotPasswordScreenStyles';

const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };


function ForgotPasswordScreen({ navigation }: { navigation: any }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Under construction</Text>
                <View
                    style={[styles.btnElement, styles.goBackButton]}>
                    <Button 
                        title='Go back'
                        onPress={() =>
                            navigation.navigate('Login')
                        }>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     image: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         height: '100%',
//     },
//     title: {
//         fontWeight: "bold",
//         fontSize: 30,
//         color: "white",
//         marginBottom: 40,
//     },
//     btnElement: {
//         color: 'white',
//         borderRadius: 25,
//         height: 50,
//         width: 150,
//         alignItems: "center",
//         justifyContent: "center",
//         margin: 5,
//     },
//     goBackButton: {
//         backgroundColor: "#1c5c27",
//     },
// });

export default ForgotPasswordScreen;