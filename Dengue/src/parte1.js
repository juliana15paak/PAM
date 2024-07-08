import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';
import { ScrollView } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Parte1({ navigation }) {
    
  return (
    <View style={styles.container}>

        <View style={styles.container2}>
          <Text style={styles.title}>Origem do Vírus da Dengue:</Text>
          <View style={styles.content}>
            <Image source={require("../assets/java.jpg")}style={styles.img}/>
            <Text style={styles.text}>De origem espanhola a palavra dengue significa "manha", "melindre", estado em que se encontra a pessoa doente. As primeiras referências foram feitas por David Bylon sobre um surto em Java em 1779, e Benjamin Rush sobre uma epidemia na Filadélfia em 1780. No final do século XIX, a dengue já era reconhecida como uma doença de costas, portos e cidades, espalhando-se para o interior ao longo dos rios</Text>
          </View>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Pag2')}> 
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
        </View>
     </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:2,
    margin:50,
    marginTop:3,
    marginBottom:30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    width:100,
    borderRadius:40,
    backgroundColor:'#A020F0',
  },

  img:{
    margin:10,
    width:256,
    height:205,

  },
  text:{
    fontSize: 16,
  },
  textButton:{
    textAlign:'center',
    fontSize: 16,
    margin:10
  
  },
});