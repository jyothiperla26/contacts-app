import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
} from 'react-native';
// import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };

function HomeScreen({ navigation }: { navigation: any }) {

    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        async function getUser() {
            try {
                const getUsername = await AsyncStorage.getItem("username");
                if (getUsername !== null) {
                    setUsername(JSON.parse(getUsername));
                }
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Welcome {username}</Text>
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