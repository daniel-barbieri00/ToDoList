import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
 
const ToDoList = () => {
  return (
<ScrollView style={styles.listContainer}>
<Text style={styles.task}>Task 1: Example Task</Text>
<Text style={styles.task}>Task 2: Another Example Task</Text>
<Text style={styles.task}>Task 3: Yet Another Example Task</Text>
      {/* Add more tasks as needed */}
</ScrollView>
  );
};
 
const styles = StyleSheet.create({
  listContainer: {
    margin: 16,
    padding: 8,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
  },
  task: {
    fontSize: 16,
    marginVertical: 8,
  },
});
 
export default ToDoList;