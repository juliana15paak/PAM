import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native-web';

export default function Des({ navigation }) {
    
  return (
    <View style={styles.container}>

        <View>

          <Text style={styles.title}> Desenvolvedores</Text>

        </View>
        
         <View style={{ flexDirection:"row"}}>

            <Text style={styles.text}>Emilly</Text>

         </View>

         <View style={{ flexDirection:"row"}}>

            <Text style={styles.text}>Evellen</Text>
         
         </View>

         <View style={{ flexDirection:"row"}}>

            <Text style={styles.text}>Juliana</Text>

         
         </View>

         <View style={{ flexDirection:"row"}}>
          
            <Text style={styles.text}>Luana</Text>
         
         </View>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Pag2')}> 
          <Text style={styles.text}>Voltar</Text>  
        </TouchableOpacity>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370DB',
    alignItems: 'center',
   justifyContent: 'center',
  },
  title:{

    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
    textAlign: 'center',
    fontWeight:'bold',
    margin:5,
    marginTop:50,
 
   },
  text:{

   alignItems: 'center',
   justifyContent: 'center',
   color: "#fff",
   textAlign: 'center',
   fontWeight:'bold',
   margin:5,
   marginTop:50,

  },
  buttonStyle:{
    alignItems: 'center',
   justifyContent: 'center',

  }

});
