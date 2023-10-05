import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Button,
    ImageBackground,
    Platform,
    FlatList,
} from 'react-native';
import {styles} from './styles/HomeScreenStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';
import { request, PERMISSIONS} from 'react-native-permissions';

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
            } else {
                console.warn('Contacts permission denied');
            }
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Welcome {username}</Text>
                <View
                    style={styles.getContactsButton}>
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

export default HomeScreen;