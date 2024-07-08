import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, text, TouchableOpacity,Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Carr() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
       navigation.navigate('Pag2');
    },3000)
  },[]);

  return (
    <View style={styles.container}>
      <Image source={require("../image/vi.gif")}style={{margin:10, width:190,height:200,}} />
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
  
});