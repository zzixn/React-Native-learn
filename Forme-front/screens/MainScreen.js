import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import settingsIcon from '../assets/settings.png';
import notiIcon from '../assets/noti.png';
import fireIcon from '../assets/fire.png';
import { showDatePicker, selectedDate, DateTimePickerModal, isDatePickerVisible, handleConfirmDate, hideDatePicker } from 'react-native-modal-datetime-picker';


const MainScreen = () => {
    const navigation = useNavigation()
    const handleConfirmDate = (date) => {
        console.log("Selected Data: ", date);
        hideDatePicker();
    }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'}/>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={settingsIcon} style={styles.settings} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>For Me</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={notiIcon} style={styles.settings} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={fireIcon} style={styles.settings} />
            </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.calendar}>
            <Text style={styles.text1}>Today</Text>
            <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.dateText}>{selectedDate ? selectedDate.toDateString() : "<    Select Date    >"}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
                style={{ flex: 1 }}
            />
        </View>
        <View style={styles.listView}>
            <Text style={styles.listTitle}>매일 신청 체크리스트</Text>
        </View>
        <View style={styles.listView}>
            <Text style={styles.listTitle}>건강</Text>
        </View>
        <View style={styles.listView}>
            <Text style={styles.listTitle}>완료됨</Text>
        </View>
        <Button title="로그인 화면" onPress={() => navigation.navigate('Home')} />
        <View style={styles.menuBar} />
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa'
    },
    pageTitle: {
        marginTop: 20,
        marginBottom: 5,
        paddingHorizontal: 15,
        fontSize: 35,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#508BFF',
        textAlign: 'center',
        flex: 1
    },
    separator: {
        marginHorizontal: 100,
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    listView: {
        flex: 1
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 14,
        fontWeight: 'bold',
        flex: 0
    },
    menuBar: {
        height: 60,
        backgroundColor: '#508BFF'
    },
    settings: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
        marginBottom: 5
    },
    calendar:{
        alignItems: 'center'
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#508BFF'
    }
})
