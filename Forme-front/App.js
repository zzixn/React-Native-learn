import { StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { MenuProvider } from 'react-native-popup-menu';
import { useEffect } from 'react';
import RequestService from './services/RequestService';
import StatScreen from './screens/StatScreen';

export default function App() {

{/* axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then(
  function(response) {console.log(response);}
); */}

  const Stack = createNativeStackNavigator();
  const RequestScreen = () => {
    useEffect(() => {
      RequestService.requestHttpGet()
        .then((req) => {
          console.log("결과값 :: ", req)
        }).catch((err) => {
          console.log("에러 메시지 ::", err)
        });
  
      const data = { title: 'foo', body: 'bar', userId: 1 };
  
      RequestService.requestHttpPost(data)
        .then((req) => {
          console.log("결과값 :: ", req)
        }).catch((err) => {
          console.log("에러 메시지 ::", err)
        });
  
      RequestService.requestHttpPut(data)
        .then((req) => {
          console.log("결과값 :: ", req)
        }).catch((err) => {
          console.log("에러 메시지 ::", err)
        });
  
      RequestService.requestHttpDelete(data)
        .then((req) => {
          console.log("결과값 :: ", req)
        }).catch((err) => {
          console.log("에러 메시지 ::", err)
        });
    })
  
  }
  return (
    <MenuProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />  
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Stat" component={StatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({});
