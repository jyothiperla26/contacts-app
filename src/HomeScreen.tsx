import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    ImageBackground,
    Platform,
    FlatList,
} from 'react-native';
import {styles} from './styles/HomeScreenStyles';
import Contacts from 'react-native-contacts';
import { request, PERMISSIONS} from 'react-native-permissions';
import { useUserData } from './useUserData';

const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };

function HomeScreen({ navigation }: { navigation: any }) {
    const { username } = useUserData();
    const [contacts, setContacts] = useState<any | null>(null);

    const askForPermissions = async (permission: any) =>{
        await request(permission).then(result =>{
            if (result === 'granted') {
                Contacts.getAll()
                .then((contacts) => {
                    setContacts( contacts );
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
                {contacts !== null ? (
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
                ):(<Text></Text>)}
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;