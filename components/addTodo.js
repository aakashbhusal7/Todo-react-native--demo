import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeTextHandler = value => setText(value);

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo ....'
                onChangeText={changeTextHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add Todo' color='coral' />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})