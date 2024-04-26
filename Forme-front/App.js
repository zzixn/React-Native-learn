import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { MenuProvider } from 'react-native-popup-menu';
import axios from 'axios';

export default function App() {

axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(
  function(response) {console.log(response);}
);

  const Stack = createNativeStackNavigator();
  return (
    <MenuProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />  
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({});
