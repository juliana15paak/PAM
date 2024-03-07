import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity,Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function Home(){
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Carregar');
    },2000)
  },[]);

  return (
    <View style={styles.container}>
      <Image source={require("./../../../assets/Logo.png")}style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}