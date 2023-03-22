import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Picker, TextInput } from 'react-native-web';
import { Image } from 'react-native-web';

export default function App() {
  const [nome, setNome] = useState();
  const [fone, setFone] = useState();
  const [adress, setAdress] = useState();
  const [email, setEmail] = useState();
  const [hobby, setHobby] = useState();


  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: "https://cdn-icons-png.flaticon.com/512/2920/2920072.png"}}
        />
      </View>
      <br></br>
      <View style={styles.caixa}>
        <Text style={styles.title}>Dados pessoais</Text>
        <StatusBar style="auto" />
        <br></br>
        <TextInput
          placeholder="Digite seu nome"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setNome(text)}
        />
        <br></br><br></br>
        <TextInput
          placeholder="Digite seu telefone"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(Number) => setFone(Number)}
        />
        <br></br><br></br>
        <TextInput
          placeholder="Digite seu endereço"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setAdress(text)}
        />
        <br></br><br></br>
        <TextInput
          placeholder="Digite seu email"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
    
      <br></br><br></br>
      <View style={styles.caixa}>
        <Text style={styles.title}>Outras informações</Text>
        <StatusBar style="auto" />
        <br></br>
        <Picker 
          style={{height: 50,witdh: 150}}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)} 
          onChangeText={(text) => setHobby(text)}
        >
          <Picker.Item label="Programar" value="programar"/>
          <Picker.Item label="Ler" value="ler"/>
          <Picker.Item label="Escrever" value="ler"/>
          <Picker.Item label="Ouvir música" value="msc"/>
        </Picker>
      </View>
      <br></br><br></br>
      <View style={styles.caixa}>
        <Text style={styles.text}>Nome: <Text>{nome}</Text></Text>
        <Text style={styles.text}>Telefone: <Text>{fone}</Text></Text>
        <Text style={styles.text}>Endereço: <Text>{adress}</Text></Text>
        <Text style={styles.text}>Email: <Text>{email}</Text></Text>
        <Text style={styles.text}>Hobby: <Text>{hobby}</Text></Text>
        <Text style={styles.text}>Aceito: <Text>{nome}</Text></Text>
        <StatusBar style="auto" />
      </View>

      <br></br>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor:"#cccccc",
  },
  title:{
    color: "#fff",
    fontSize: "20px",
    fontFamily: "Verdana",
  },
  text:{
    color: "#fff",
    fontSize: "16px",
    fontFamily: "Verdana",
  },
  caixa:{
    borderWidth: "1px",
    width: "30%",
    padding: "20px",
    borderColor: "#ffb6c1",
    borderRadius: "20px",
  }

});