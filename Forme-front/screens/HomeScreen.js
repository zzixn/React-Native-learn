import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MainIcon from '../assets/main.jpg'
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={MainIcon} style={styles.image} />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.kakaoButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24">
                    <Path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z" />
                </Svg>
                <Text style={[styles.buttonText, {marginLeft: 40}]}>카카오로 계속하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
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

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 370,
        resizeMode: 'cover'
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        gap: 15
    },
    kakaoButton: {
        flexDirection: 'row',
        backgroundColor: '#FAEB68',
        width: '130%',
        padding: 15,
        borderRadius: 20,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#E5E5E5',
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
    },
    kakaoIcon: {
        width: 20,
        height: 20,
        marginRight: 5
    }
})