import React from 'react';
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ addTaskProp }) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        addTaskProp(taskText);
        setTaskText('');
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};
 
    const styles = StyleSheet.create({
        formContainer: {
            margin: 16,
            padding: 8,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 8,
        },
        input: {
            height: 40,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            fontSize: 16,
            marginBottom: 8,
        },
    });