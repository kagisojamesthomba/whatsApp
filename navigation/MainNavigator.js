import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatSettingsScreen from './../screens/ChatSettingsScreen';
import ChatListScreen from './../screens/ChatListScreen';
import SettingsScreen from './../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='ChatList'
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubble-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ChatSettings'
        component={ChatSettingsScreen}
        options={{ title: 'Settings', animationEnabled: true }}
      />
      <Stack.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{ title: 'Chat', animationEnabled: true }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
