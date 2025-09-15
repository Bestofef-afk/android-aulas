import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/homeScreen';
import MenuScreen from './src/menuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cardápio" component={MenuScreen} options={{ title: 'Nosso Cardápio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}