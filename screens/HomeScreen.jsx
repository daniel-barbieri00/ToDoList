import useState from 'react';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({ tasks, addTask, navigation, clearTasks }) {
    return (
        <MainLayout>
            <ToDoList tasks={tasks} />
            <ToDoForm addTaskProp={addTask} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>

    );
}