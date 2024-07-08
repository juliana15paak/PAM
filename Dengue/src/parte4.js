import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';
import { ScrollView } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';
    
export default function Parte4({ navigation }) {
    
  return (
    <View style={styles.container}>

            <View style={styles.container}>
              <Text style={styles.title}>Condições de Sobrevivência:</Text>
             
              <View style={styles.content}>
                <Image source={require("../assets/ee.png")}style={styles.img}/> 
              
                <Text style={styles.text}>As condições de sobrevivência do vírus (DENV) que são da família flaviviridae dois gênios flavivírus, as principais são hospedeiros que seriam os mosquitos vetores que são os mosquitos dos gênero aedes, ambiente adequado para o vetor.</Text> 
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
    backgroundColor: '#DEB887',
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
    marginTop:80,
    borderRadius:40,
    backgroundColor:'#D2691E',
  },
  img:{
    margin:10,
    width:306,
    height:270,
  },
  text:{
    fontSize: 16,
    marginTop:70,
  },
  textButton:{
    textAlign:'center',
    fontSize: 16,
    margin:10
  },
  
});