import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Grupo from './src/Pages/Devs/grupo.js';
import Pag1 from './src/Pages/Principal/pag1.js';
import Cad from './src/Pages/Cadastro/index.js'; 
import Login from './src/Pages/Login/login.js';
import Splash from './src/Pages/Splash/index.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Cad" component={Cad} options={{headerShown: false}}/> 
        <Stack.Screen name="Grupo" component={Grupo} options={{headerShown: false}}/> 
        <Stack.Screen name="Pag1" component={Pag1} options={{headerShown: false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}