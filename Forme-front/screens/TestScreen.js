import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const TestScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <Button title="로그인 화면" onPress={() => navigation.navigate('Main')} />
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({})