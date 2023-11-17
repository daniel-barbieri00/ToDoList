import { React, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";


function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
 
  return (
    <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
    </View>
  );
}

export default App;