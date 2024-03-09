import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';

export default function Login({ navigation }) {
    
  return (
    <View style={styles.container}>

    <View  style={styles.texto}>
    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Pag1')}> 
    <text>login</text>
      </TouchableOpacity>
    </View>
   
     </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEBEBE',
    alignItems: 'center',
   justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 0.5,  
    height: 100, 
    borderRadius: 5, 
    margin: 5, 

  },

  texto:{
    marginTop: 90,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Open Sans',
    fontWeight:'900',
    border:'solid transparent',

   },

});