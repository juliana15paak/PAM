import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carr from './src/carr.js';
import Pag2 from './src/pag2.js';
import Parte1 from './src/parte1.js';
import Parte2 from './src/parte2.js';
import Parte3 from './src/parte3.js';
import Parte4 from './src/parte4.js';
import Des from './src/des.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carr">

       
        <Stack.Screen name="Pag2" component={Pag2} options={{headerShown: false}} />
        <Stack.Screen name="Carr" component={Carr} options={{headerShown: false}}/>
        <Stack.Screen name="Parte1" component={Parte1} options={{headerShown: false}}/>
        <Stack.Screen name="Parte2" component={Parte2} options={{headerShown: false}}/>
        <Stack.Screen name="Parte3" component={Parte3} options={{headerShown: false}}/>
        <Stack.Screen name="Parte4" component={Parte4} options={{headerShown: false}}/>
        <Stack.Screen name="Des" component={Des} options={{headerShown: false}}/>
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}