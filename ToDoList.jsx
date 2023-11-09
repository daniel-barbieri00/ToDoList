import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ taskText }) => {
  return <Text>{taskText}</Text>;
};

const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <Task key={index} taskText={task} />
      ))}
    </View>
  );
};

export default ToDoList;
