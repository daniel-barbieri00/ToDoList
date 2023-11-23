import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
    const Task = ({ taskText }) => {
        return <Text>{taskText}</Text>;
    };

    return (
        <View>
            {tasks.map((task, index) => (
                <Task key={index} taskText={task} />
            ))}
        </View>
    );
};

export default ToDoList;
