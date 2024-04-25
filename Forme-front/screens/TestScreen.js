import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import TodoItemList from '../components/TodoItemList'
import { useNavigation } from '@react-navigation/native'
import InputForm from '../components/InputForm'

const TestScreen = () => {
    const navigation = useNavigation();

    const [ todoList, setTodoList ] = useState([]);

  return (
    <View style={styles.container}>
        <InputForm todoList={todoList} setTodoList={setTodoList} />
      <TodoItemList 
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />
      <TodoItemList 
        title={'완료한 항목'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
      <Button title="메인" onPress={() => navigation.navigate('Main')} />
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})