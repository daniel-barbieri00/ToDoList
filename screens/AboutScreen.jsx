import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <Text>
                Personal To-Do List
            </Text>
            <Text>
                Daniel Barbieri
            </Text>
            <Text>
                2023-11-22
            </Text>

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </MainLayout>
    )
}