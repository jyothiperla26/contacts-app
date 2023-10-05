import React from 'react';
import {
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

export default ForgotPasswordScreen;