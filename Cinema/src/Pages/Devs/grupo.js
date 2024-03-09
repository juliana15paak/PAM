import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native';
import { ScrollView, SafeAreaView } from 'react-native-web';

export default function Grupo({ navigation }) {
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
         <Image source={require("../../../assets/tra.png")}style={{margin:10, width:365,height:120,}} />
         <View style={{ flexDirection:"row"}}>

            <Image source={require("../../../assets/pessoa.png")}style={{margin:10, width:150,height:150,}} />

            <Image source={require("../../../assets/emilly.png")}style={{margin:10, width:235,height:90,}} />


         </View>

         <View style={{ flexDirection:"row"}}>

            <Image source={require("../../../assets/pessoa.png")}style={{margin:10, width:150,height:150,}} />

            <Image source={require("../../../assets/evellen.png")}style={{margin:10,width:235,height:90,}} />
         
         
         </View>

         <View style={{ flexDirection:"row"}}>


            <Image source={require("../../../assets/pessoa.png")}style={{margin:10, width:150,height:150,}} />

            <Image source={require("../../../assets/juliana.png")}style={{margin:10, width:235,height:90,}} />

         
         </View>

         <View style={{ flexDirection:"row"}}>


            <Image source={require("../../../assets/pessoa.png")}style={{margin:10, width:150,height:150,}} />

            <Image source={require("../../../assets/luana.png")}style={{margin:10, width:235,height:90,}} />

         
         </View>
      </ScrollView>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00003A',
    alignItems: 'center',
   justifyContent: 'center',
  },

});


