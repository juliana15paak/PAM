import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, TouchableOpacity, Modal, StyleSheet } from 'react-native';
//import { useState } from 'react';

import Home from './src/Pages/Home';
import Carregar from './src/Pages/Carregar';
import Cadastro from './src/Pages/Cadastro';
import BoaVinda from './src/Pages/BoaVinda';
import Territorios from './src/Pages/Territorios';
import Territorio1 from './src/Pages/Territorio1';
import Territorio2 from './src/Pages/Territorio2';
import Territorio3 from './src/Pages/Territorio3';
import Territorio4 from './src/Pages/Territorio4';
import Territorio5 from './src/Pages/Territorio5';
import Territorio6 from './src/Pages/Territorio6';

const Stack = createNativeStackNavigator();
//const [isModalVisible, setIsModalVisible] = useState(false);

export default function App() {
  return (
  /*  <>
    <Modal animationType="slide" visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
      <View style={styles.modal}>
        <View style={styles.text}><Text>Perfil</Text></View>
        <View style={styles.text}><Text>Sobre</Text></View>
        <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible(false)}></Button></View>
        <View style={styles.text}><Text>Sair</Text></View>
      </View>
    </Modal>*/
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Carregar" component={Carregar}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerBackVisible:false,
          }}
        />
        
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
         <Stack.Screen name="BoaVinda" component={BoaVinda}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerBackVisible:false,
          }}
        />
        <Stack.Screen name="Territorios" component={Territorios}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Territorio1" component={Territorio1}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
           /* headerRight: () => (
              <TouchableOpacity onPress={() => setIsModalVisible(true)}> 
                <Image source={require("./../../../assets/menu.png")} />
              </TouchableOpacity>
            ),*/
          }}
        />
        <Stack.Screen name="Territorio2" component={Territorio2}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Territorio3" component={Territorio3}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Territorio4" component={Territorio4}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Territorio5" component={Territorio5}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
        <Stack.Screen name="Territorio6" component={Territorio6}
          options={{
            headerTitle: "",
            headerBackground: () => (
              <ImageBackground
                source={require('./assets/Cima.png')}
                style={{ flex: 1, height:100 }}
              />
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  //</>
  );
}
/*
const styles = StyleSheet.create({
  modal: {
    flex:1,
    backgroundColor: '#E0AE51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModal:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:'16px',
  }
}); */