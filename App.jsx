import React from 'react';
import { useState } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
    const Stack = createStackNavigator();

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);

        console.log('All items:', tasks);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {(props) => <HomeScreen {...props} tasks={tasks} addTask={addTask} />}
                </Stack.Screen>
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
