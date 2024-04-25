import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'

const TodoItemList = ({ title, todoList, setTodoList, checkedList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={todoList.filter(todoItem => !todoItem.deleted && checkedList === todoItem.checked)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TodoItem todoItem={item} todoList={todoList} setTodoList={setTodoList} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default TodoItemList

