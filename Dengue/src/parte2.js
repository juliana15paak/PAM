import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';
import { ScrollView } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Parte2({ navigation }) {
    
  return (
    <View style={styles.container}>
  
        <View style={styles.container}>
          <Text style={styles.title}>Como o vírus afeta o corpo?</Text>
         
          <View style={styles.content}>
            <Image source={require("../assets/dd.png")}style={styles.img}/> 
            <Text style={styles.text}>1. O mosquito Aedes aegypti pica e transmite o vírus</Text> 
            <Text style={styles.text}>2. O vírus se multiplica: ele entra na corrente sanguínea e se multiplica em órgãos como baço, fígado e tecido linfáticos. Esse processo dura de 4 a 7 dias, sem causar sintomas.</Text>
            <Text style={styles.text}>3. O vírus ataca o corpo: ele volta para o sangue e ataca as células sanguíneas e as paredes dos vasos sanguíneos, podendo causar sintomas como febre, dor de cabeça, dores musculares e manchas na pele.</Text>
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
    backgroundColor: '#E4ABFE',
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
    marginTop:30,
    borderRadius:40,
    backgroundColor:'#B007FF',
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