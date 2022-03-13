import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import Main from "../components/Main";
import Description from "../components/Description";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title: "Main",
                        headerStyle: {backgroundColor: '#8092e8', height: 60},
                        headerTitleStyle: {fontWeight: 'bold'},
                        headerTintColor: '#474747',
                        textAlign: 'center',
                        headerTitleAlign: 'center'
                    }}
            />
            <Stack.Screen
                name="Description"
                component={Description}
                options={
                    {
                        title: "Description",
                        headerStyle: {backgroundColor: '#8092e8', height: 60},
                        headerTitleStyle: {fontWeight: 'bold'},
                        headerTintColor: '#474747',
                        headerTitleAlign: 'center'
                    }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
