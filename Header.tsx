/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {styles} from './styles';
import {
    Text,
    View,
  } from 'react-native';

export default function Header():JSX.Element {
  return (
    <View>
      <Text style = {styles.headersHeading}>Sign-in User</Text>
      <Text style = {styles.HeadersParaElement}>Please fill the below details</Text>
    </View>
  );
}
