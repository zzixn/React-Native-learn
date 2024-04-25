import { Pressable, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const InputForm = ({ todoList, setTodoList }) => {
    const [ todo, setTodo ] = useState('');
    const inputRef = useRef(null);
    
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
        inputRef.current.clear(); // 입력창 내용 비우기
        inputRef.current.focus();
    };

    useEffect(() => { // todoList가 변할 때마다 실행
        console.log(todoList);
      }, [todoList]); // todoList에 쌓이는지 확인하기 위함, 나중에 지워도 됨

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputText}
        value={todo}
        ref={inputRef}
        placeholder="할 일을 입력해주세요."
        onChangeText={onTodoInput}
      />
      <Pressable style={styles.addButton}>
        <Button title="저장" onPress={onPressAdd}/>
      </Pressable>
    </View>
  );
};

export default InputForm

const styles = StyleSheet.create({
    InputContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 40,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    InputText: {
      flex: 1,
      paddingHorizontal: 8,
      backgroundColor: '#5F5F5F'
    },
    addButton: {
      justifyContent: 'center',
      alignContent: 'center',
      height: 40,
      width: 40,
    }
})