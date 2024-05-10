import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Path, Svg } from 'react-native-svg';
import settingsIcon from '../assets/settings.png';
import notionIcon from '../assets/notion.png';
import fireIcon from '../assets/fire.png';
import HomeOn from '../assets/home_on.svg';
import Stat from '../assets/stats.svg';

const StatScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <View style={styles.header}>
                <View style={styles.leftSettings}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={settingsIcon} style={styles.settings} />
                </TouchableOpacity>
                </View>
                <View style={styles.rightSettings}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={notionIcon} style={styles.settings} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={fireIcon} style={styles.settings} />
                </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.pageTitle}>For Me</Text>
            <View style={styles.menuBar} >
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Svg width="45" height="45" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Svg width="45" height="45" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}>
                        <HomeOn />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Stat')}>
                        <Stat />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Svg width="45" height="45" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                
                            /> 
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>     
      <Button title="메인 화면" onPress={() => navigation.navigate('Main')} />
    </SafeAreaView>
  )
}

export default StatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        top: 15
    },
    pageTitle: {
        fontSize: 35,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#508BFF',
        textAlign: 'center',
        bottom: 20
    },
    leftSettings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightSettings: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    settings: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    menuBar: {
        height: 60,
        backgroundColor: '#508BFF',
        flexDirection: 'row',
        justifyContent:'space-around',
        // flex: 1
    },
    menuIcon: {
        margin: 10
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})