import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState();
  const [fone, setFone] = useState();
  const [adress, setAdress] = useState();
  const [email, setEmail] = useState();

  function cadastro(){
    AsyncStorage.setItem('nome', nome)

    AsyncStorage.setItem('fone', fone)

    AsyncStorage.setItem('adress', adress)

    AsyncStorage.setItem('email', email)
    navigation.navigate('BoaVinda')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require("./../../../assets/Avatar.png")}style={styles.iconImg} />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.text}>Nome: </Text>
        <TextInput
          placeholder=" Leon"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.text}>Telefone: </Text>
        <TextInput
          placeholder=" 11 94002-8922"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(Number) => setFone(Number)}
        />
        <Text style={styles.text}>Endereço: </Text>
        <TextInput
          placeholder=" R. Exemplo, 0101"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setAdress(text)}
        />
        <Text style={styles.text}>Email: </Text>
        <TextInput
          placeholder=" nome@email.com"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.botao}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => cadastro()}> 
          <Image source={require("./../../../assets/Entrar.png")}style={styles.botaoImg} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}