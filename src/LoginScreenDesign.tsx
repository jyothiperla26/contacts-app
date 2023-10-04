
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    navigation.navigate('Home');
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

export default LoginScreen;