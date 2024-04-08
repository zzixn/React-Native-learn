import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import { useSelector } from'react-redux';
import { Provider } from'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

const MainScreen = () => {
    const navigation = useNavigation();
    const todos = useSelector(state => state.todo.todos);
    const todoTasks = todos.filter((item) => item.state === 'todo');
    const completedTasks = todos.filter((item) => item.state === 'done');

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'default'} />
        <Text style={styles.pageTitle}>ToDo App</Text>
        <Button 
        title="go to login" 
        onPress={() => navigation.navigate('Login')}
      />
        
        <View style={styles.listView}>
            <Text style={styles.listTitle}>할 일</Text>
            {todoTasks.length !== 0 ? (
                <FlatList
                data={todoTasks}
                renderItem={({item}) => <TodoItem {...item} />}
                keyExtractor={(item) => item.id}
                />) :
                (<Text style={styles.emptyListText}>할 일이 없습니다.</Text>)
            }
        </View>
        <View style={styles.separator} />
        <View style={styles.listView}>
            <Text style={styles.listTitle}>완료된 일</Text>
            {completedTasks.length !== 0 ? (
                <FlatList
                data={completedTasks}
                renderItem={({item}) => <TodoItem {...item} />}
                keyExtractor={(item) => item.id}
                />) :
                (<Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
            )}
        </View>
        <InputForm />
    </SafeAreaView>
  )
}

//Style Sheet Style
export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // SafeAreaView 안드로이드 따로 적용 안해주면 이렇게 수동으로 padding 설정 해주면 됨
        //paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#f7f8fa'
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 54,
        fontWeight: '600'
    },
    separator : {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    listView: {
        flex: 1
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 41,
        fontWeight: '500'
    },
    emptyListText: {
        paddingTop: 10,
        paddingBottom: 15,
        paddingHorizontal: 15,
        fontSize: 15,
        lineHeight: 20,
        color: '#737373'
    }
})