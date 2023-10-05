import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useUserData = () => {

  const [username, setUsername] = useState<string | null>(null);

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

    useEffect(() => {
        getUser()
    }, []);

  return {username}
};