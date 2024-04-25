import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import TestScreen from './screens/TestScreen';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <MenuProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />  
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({});
