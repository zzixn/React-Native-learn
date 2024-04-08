import { Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="아이디"
                value={id}
                onChangeText={text => setId(text)}
                style={styles.input} 
            />
            <TextInput 
                placeholder="비밀번호"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input} 
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text style={styles.MainButtonText}>고객센터</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.LogoText}>For Me</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        gap: 15
    },
    inputContainer: {
        width: '70%'
    },
    input: {
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    button: {
        backgroundColor: '#508BFF',
        width: '130%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '900',
        fontSize: 14
    },
    MainButtonText: {
        fontWeight: '900',
        fontSize: 12,
        color: '#868E96',
        marginTop: 30
    },
    LogoText: {
        fontWeight: '900',
        fontSize: 20,
        color: '#868E96',
        textAlign: 'center',
        fontStyle: 'italic'
    }
})