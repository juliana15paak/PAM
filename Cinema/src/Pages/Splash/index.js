import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Carregar() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('nome')
      .then(setNome=>{
        if(setNome==null){
          navigation.navigate('Cad')
        }else{
          navigation.navigate('Login')
        }
      })
    },3000)
  },[]);

/*  
  if(localStorage.getItem('nome')==null){
    navigation.navigate('Cad');
  }else{
    navigation.navigate('Login');
  }
*/

  return (
    <View style={styles.container}>
      <Image source={require("./../../../assets/loading-splash.gif")}style={styles.carregar}/>
      <StatusBar style="auto" />
    </View>
  );
}
