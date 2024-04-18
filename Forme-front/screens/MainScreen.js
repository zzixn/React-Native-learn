import { Button, KeyboardAvoidingView, Modal, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import settingsIcon from '../assets/settings.png';
import notionIcon from '../assets/notion.png';
import fireIcon from '../assets/fire.png';
import { showDatePicker, selectedDate, DateTimePickerModal, isDatePickerVisible, handleConfirmDate, hideDatePicker } from 'react-native-modal-datetime-picker';
import writeIcon from '../assets/write.svg';
import { Path, Svg } from 'react-native-svg';

const MainScreen = () => {
    const navigation = useNavigation();
    const handleConfirmDate = (date) => {
        console.log("Selected Data: ", date);
        hideDatePicker();
    };
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ category, setCategory ] = useState('');
    const [ goal, setGoal ] = useState('');

    const handlePress = () => {
        console.log('Category:', category);
        console.log('Goal:', goal);
        setModalVisible(false);
        setCategory('');
        setGoal('');
    };

    const [ isFilled, setIsFilled ] = useState(false);

    const FillModeAndModal = () => {
        if(modalVisible) {
            setIsFilled(false);
            setModalVisible(false);
        } else {
            setIsFilled(!isFilled);
            setModalVisible(true);
        }
    };

    const handleModalClose = () => {
        setIsFilled(false);
    };

    useEffect(() => {
        if (!modalVisible) {
            handleModalClose();
        }
    }, [modalVisible]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'default'}/>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={settingsIcon} style={styles.settings} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>For Me</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={notionIcon} style={styles.settings} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={fireIcon} style={styles.settings} />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.listView}>
                <Text style={styles.listTitle}>매일 신청 체크리스트</Text>
            </View>
            <View style={styles.listView}>
                <Text style={styles.listTitle}>건강</Text>
            </View>
            <View style={styles.listView}>
                <Text style={styles.listTitle}>완료됨</Text>
            </View>
            <Modal
                animationType="fade"
                transparent={true} // true = 모달 열어도 뒤에 화면 보이게, false = 모달 열면 뒤에 화면 불투명하게
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => {}}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>카테고리</Text>
                                <TextInput
                                    style={styles.input}
                                    value={category}
                                    onChangeText={text => setCategory(text)}
                                    placeholder="카테고리를 입력하세요"
                                />
                                <Text style={styles.modalTitle}>목표 이름</Text>
                                <TextInput
                                    style={styles.input}
                                    value={goal}
                                    onChangeText={text => setGoal(text)}
                                    placeholder="목표 이름을 입력하세요"
                                />
                                <Button title="저장" onPress={handlePress} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Button title="로그인 화면" onPress={() => navigation.navigate('Home')} />
            <View style={styles.menuBar} >
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                        <Svg width="50" height="50" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
                                strokeWidth="2"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                        <Svg width="50" height="50" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
                                strokeWidth="2"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                        <Svg width="50" height="50" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
                                strokeWidth="2"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                        <Svg width="50" height="50" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
                                strokeWidth="2"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                        <Svg width="50" height="50" viewBox="-7 -5 50 50">
                            <Path 
                                d="M24.98 30.009h-23v-25h14.050l2.022-1.948-0.052-0.052h-16.020c-1.105 0-2 0.896-2 2v25c0 1.105 0.895 2 2 2h23c1.105 0 2-0.895 2-2v-14.646l-2 1.909v12.736zM30.445 1.295c-0.902-0.865-1.898-1.304-2.961-1.304-1.663 0-2.876 1.074-3.206 1.403-0.468 0.462-13.724 13.699-13.724 13.699-0.104 0.106-0.18 0.235-0.219 0.38-0.359 1.326-2.159 7.218-2.176 7.277-0.093 0.302-0.010 0.631 0.213 0.851 0.159 0.16 0.373 0.245 0.591 0.245 0.086 0 0.172-0.012 0.257-0.039 0.061-0.020 6.141-1.986 7.141-2.285 0.132-0.039 0.252-0.11 0.351-0.207 0.631-0.623 12.816-12.618 13.802-13.637 1.020-1.052 1.526-2.146 1.507-3.253-0.019-1.094-0.55-2.147-1.575-3.129zM29.076 6.285c-0.556 0.574-4.914 4.88-12.952 12.798l-0.615 0.607c-0.921 0.285-3.128 0.994-4.796 1.532 0.537-1.773 1.181-3.916 1.469-4.929 1.717-1.715 13.075-13.055 13.506-13.48 0.084-0.084 0.851-0.821 1.795-0.821 0.536 0 1.053 0.244 1.577 0.748 0.627 0.602 0.95 1.179 0.959 1.72 0.010 0.556-0.308 1.171-0.943 1.827z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
                                strokeWidth="2"
                            /> 
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
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
        backgroundColor: '#508BFF',
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    menuIcon: {
        margin: 10
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%'
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 20
    }
})
