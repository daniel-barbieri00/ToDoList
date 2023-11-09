import { React, useState } from  'react';
import { View, Text } from 'react-native';
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
 
  return (
    <View>
        <ToDoList tasks={tasks} />
    </View>
  );
}

export default App;