import { Button, Modal, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import settingsIcon from '../assets/settings.png';
import notionIcon from '../assets/notion.png';
import fireIcon from '../assets/fire.png';
import { Path, Svg } from 'react-native-svg';
import CalendarButton from '../components/CalendarButton';
import TodoItemList from '../components/TodoItemList';
import HomeOn from '../assets/home_on';
import Stat from '../assets/stat_off.svg';
import Comm from '../assets/comm_off';
import UserOff from '../assets/user_off';
import Write from "../assets/write_off";
import Write_on from "../assets/write_on";
import InputIcon from '../assets/input.svg'


const MainScreen = () => {
    const [ todoList, setTodoList ] = useState([]);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ todo, setTodo ] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const inputRef = useRef(null);
    const navigation = useNavigation();

    const onTodoInput = (newTodo) => {
        setTodo(newTodo);
    };

    const onPressAdd = () => {
        if (todo.trim() === ''){ // 입력값이 없으면 아무 동작도 하지 않음
            return;
        }

        const NewTodoList = [...todoList, { id: todoList.length, todo, checked: false, delete: false }];
        setTodoList(NewTodoList);

        setTodo(''); // 입력값 초기화
        if(inputRef.current){
        inputRef.current.clear(); // 입력창 내용 비우기
        inputRef.current.focus();
    }
        setModalVisible(false);
    };

    const [completedVisible, setCompletedVisible] = useState(true);
    const toggleCompletedVisible = () => {
        setCompletedVisible(!completedVisible);
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
    
    const closeModal = () => {
        setTodo('');
        setModalVisible(false);
    }

    useEffect(() => {
        if (!modalVisible) {
            handleModalClose();
        }
    }, [modalVisible]);

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
            <CalendarButton setTodoList={setTodoList} />
            <Text style={styles.subTitle}>매일 실천 체크리스트</Text>
            <View style={styles.listView}>
                <TodoItemList 
                    title={'카테고리'} // 서버에서 입력받는 값
                    todoList={todoList}
                    setTodoList={setTodoList}
                    checkedList={false}
                    selectedDate={selectedDate}
                />
                <TouchableOpacity onPress={toggleCompletedVisible} style={styles.toggleContainer}>
                    <Text>
                     {completedVisible? '▶': '▼'}
                    </Text>
                </TouchableOpacity>
                {completedVisible && (
                <TodoItemList 
                    title={'완료됨'}
                    todoList={todoList}
                    setTodoList={setTodoList}
                    checkedList={true}
                    selectedDate={selectedDate}
                />
            )}
            </View>            
            <Modal
                animationType="fade"
                transparent={true} // true = 모달 열어도 뒤에 화면 보이게, false = 모달 열면 뒤에 화면 불투명하게
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableWithoutFeedback onPress={(closeModal)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={() => {}}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>목표 설정</Text>
                                <View style={styles.modalInput}>
                                <TextInput
                                    style={styles.input}
                                    value={todo}
                                    ref={inputRef}
                                    onChangeText={onTodoInput}
                                    placeholder="목표 이름을 입력하세요"
                                />
                                <InputIcon onPress={onPressAdd} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Button title="로그인 화면" onPress={() => navigation.navigate('Home')} />
            <View style={styles.menuBar} >
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.menuIcon}>
                        <Comm />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={FillModeAndModal} style={styles.menuIcon}>
                       
                        <Svg width="45" height="45" viewBox="-7 -5 50 50">
                            <Path 
                                d="M33,6.4,29.3,2.7a1.71,1.71,0,0,0-2.36,0L23.65,6H6A2,2,0,0,0,4,8V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V11.76l3-3A1.67,1.67,0,0,0,33,6.4ZM18.83,20.13l-4.19.93,1-4.15,9.55-9.57,3.23,3.23ZM29.5,9.43,26.27,6.2l1.85-1.85,3.23,3.23Z"
                                fill={isFilled ? 'white' : 'black'} // isFilled 상태에 따라 채우기/외곽선 설정
                                stroke={isFilled ? 'black' : 'white'} // isFilled 상태에 따라 외곽선/채우기 설정
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
                        <UserOff />
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
    listView: {
         flex: 1,
         
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 14,
        fontWeight: 'bold',
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
    modalInput: {
        flexDirection: 'row'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 20
    },
    subTitle: {
        color: '#343A40',
        fontWeight: '800',
        fontSize: 17,
        paddingLeft: 40,
        paddingTop: 15
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
