import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    Platform,
    FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };


function HomeScreen({ navigation }: { navigation: any }) {

    const [username, setUsername] = useState<string | null>(null);
    const [contacts, setContacts] = useState<any | null>(null);

    useEffect(() => {
        async function getUser() {
            try {
                const getUsername = await AsyncStorage.getItem("username");
                const getData = await AsyncStorage.getItem("data");
                if (getUsername !== null) {
                    setUsername(JSON.parse(getUsername));
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, []);

    const askForPermissions = async (permission: any) =>{
        await request(permission).then(result =>{
            if (result === 'granted') {
                Contacts.getAll()
                .then((contacts) => {
                    setContacts( contacts );
                    console.log(contacts);
                })
                .catch((e) => {
                    console.warn("Permission to access contacts was denied");
                });
                console.log('Hiii');
            } else {
                console.warn('Contacts permission denied');
            }
            console.log(result);
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Welcome {username}</Text>
                <View
                    style={[styles.btnElement, styles.loginButton]}>
                    <Button
                        title='Get contacts'
                        onPress={()=>{
                            if(Platform.OS === 'ios'){
                                askForPermissions(PERMISSIONS.IOS.CONTACTS);
                            }
                        }}
                    ></Button>
                </View>
                <FlatList
                style={styles.contactsContainer}
                keyExtractor={item => item.recordID}
                data={contacts}
                renderItem={({item})=>{
                    return (
                        <View style={styles.eachContact}>
                            <View>
                                <Text>{`${item.givenName}`} {item.familyName}</Text>
                            </View>
                            <View>
                                {item.phoneNumbers.map((phone: {number: string | number })=>(
                                    <Text>{phone.number}</Text>
                                ))}
                            </View>
                        </View>
                    )
                }}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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
    accessButton: {
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        marginRadius: 25,
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

});

export default HomeScreen;