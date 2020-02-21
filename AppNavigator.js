import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import React from 'react';
import MainScreen from './screens/MainScreen';
import ChatScreen from './screens/ChatScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import ModalScreen from './screens/ModalScreen';
import LeftHeader from './components/MainComponents/LeftHeader';
import RightHeader from './components/MainComponents/RightHeader';


const Stack = createStackNavigator();


function StackMain() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    headerTitle: () => <LeftHeader />,
                    headerRight: () => <RightHeader />,
                }}
            />
            <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    tabBarVisible: false,
                }}
            />

        </Stack.Navigator>
    );
}





const Tab = createBottomTabNavigator();

export default function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={StackMain}
            />
            <Tab.Screen name="Directory" component={DirectoryScreen}
                // options={{
                //     tabBarVisible: false,
                // }} 
                />
            <Tab.Screen name="ChatScreen" component={ChatScreen}
                // options={{
                //     tabBarVisible: false,
                // }} 
            />
        </Tab.Navigator>
    )
}

