import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';
import { ScrollView } from 'react-native-web';
import { SafeAreaView } from 'react-native-safe-area-context';
    
export default function Parte3({ navigation }) {
    
  return (
    <View style={styles.container}>
   
        <View style={styles.container}>
          <Text style={styles.title}>Características:</Text>
          
          <View style={styles.content}>
            <Image source={require("../assets/mos.png")}style={styles.img}/> 
            <Text style={styles.text}>Os  sintomas  gerais  do  dengue  com  febre  e mal-estar surgem
             após período de incubação de dois(2) a sete (7) dias, 
             coincidindo com a viremia. Esses sintomas relacionam-se
              a níveis séricos elevados de citocinas liberadas por 
              macrófagos ao interagirem com linfócitos T (LT) helper
               ativados. Observam-se altos teores séricos de interleucina-2
                (IL-2) e de seu receptor  solúvel,  de  CD4  solúvel,  
                interferon-γ  (IFN-γ), interferon-α (IFN-α) que
                 se mantêm elevado até aconvalescença, 
                 fator de necrose tumoral-α (TNF-α),interleucina 
                 1 β (IL-1β) e o fator de ativação de plaquetas
                  (PAF). A leucopenia e a discreta e transitória 
                  depressão medular que se apresentam nesses casos </Text>
           
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
    backgroundColor: '#D8BFD8',
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
    backgroundColor:'#BA55D3',
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