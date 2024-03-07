import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Carregar() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      if(localStorage.getItem('nome')==null){
        navigation.navigate('Cadastro');
      }else{
        navigation.navigate('BoaVinda');
      }
    },3000)
  },[]);

 /* AsyncStorage.getItem('nome')
  .then(setNome=>{
    if(setNome!==null){
      navigation.navigate('BoaVinda')
    }else{
      navigation.navigate('Cadastro')
    }
  })*/
  return (
    <View style={styles.container}>
      <Image source={require("./../../../assets/Carregamento.gif")}style={styles.carregar}/>
      <StatusBar style="auto" />
    </View>
  );
}