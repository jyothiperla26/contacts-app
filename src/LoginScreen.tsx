
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles/LoginScreenStyles';

const image = { uri: 'https://cdn.cbeditz.com/cbeditz/preview/blur-cb-editing-background-full-hd-download-for-picsart-11652345912khud9mamgd.webp' };

function LoginScreen({ navigation }: { navigation: any }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('username', JSON.stringify(username));
      await AsyncStorage.setItem('password', JSON.stringify(password));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    storeData();
    if(username!=''){
      navigation.replace('Home');
    }
  };

  return (
  
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            onChangeText={setUsername}
            value={username}
            placeholder="Username"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View
            style={[styles.btnElement, styles.loginButton]}>
            <Button
              title='Login'
              onPress={handleLogin}></Button>
          </View>
          <View
            style={[styles.btnElement, styles.forgotButton]}>
            <Button
              title="Forgot Password"
              onPress={() =>
                navigation.navigate('Forgot')
              }>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

}

export default LoginScreen;