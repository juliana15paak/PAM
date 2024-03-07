import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
 
  const[imgJogador, setImgJogador]=useState(0)
  const[imgBot, setImgBot]=useState(0)
  const[placarJogador, setPlacarJogador]=useState(0)
  const[placarBot, setPlacarBot]=useState(0)

  function exibirImagem(valor){
    if(valor==0){
      return <Image source ={require('./assets/interrogacao.png')}style={styles.img}></Image>
    }else if (valor==1){
      return <Image source ={require('./assets/pedra.png')}style={styles.img3}></Image>
    }else if (valor==2){
      return <Image source ={require('./assets/papel.png')}style={styles.img3}></Image>
    }else if (valor==3){
      return <Image source ={require('./assets/tesoura.png')}style={styles.img3}></Image>
    }
  }
  
  function jogada(jogadaJogador){
    setImgJogador(jogadaJogador)
    let jogadaBot = Math.floor(Math.random() * 3)+1;
    setImgBot(jogadaBot)

    if(jogadaJogador==1 && jogadaBot==3 || jogadaJogador==2 && jogadaBot==1 || jogadaJogador==3 && jogadaBot==2){
      setPlacarJogador(placarJogador+1)
    }else if(jogadaBot==1 && jogadaJogador==3 || jogadaBot==2 && jogadaJogador==1 || jogadaBot==3 && jogadaJogador==2){
      setPlacarBot(placarBot+1)
    }
  }

  function novo(){
    setPlacarJogador(0)
    setPlacarBot(0)
    setImgBot("")
    setImgJogador("")
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.forView}>
        <Text style={styles.titulo}>Jo ken pô</Text>
      </View>
      <View style={styles.forView2}>
        <Text style={styles.placar}>Placar</Text>
        <View style={{flexDirection:'row', justifyContent:"space-around", alignItems:'center'}}>
          <Text style={styles.placar}>{placarJogador}</Text>
          <Text style={styles.placar}>{placarBot}</Text>
        </View>
      </View>
      <View style={styles.forView3}>
        {exibirImagem(imgJogador)}
        <Image source ={require('./assets/vs.png')}style={styles.img2}></Image>
        {exibirImagem(imgBot)}
      </View>
      <View style={styles.forView4}>
        <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
          <View style ={styles.btnArea}>
            <Text style={styles.bntTexto}>Nova Partida</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.forView5}>
        <TouchableOpacity style={styles.botao2} onPress={()=>jogada(1)}>
          <View style ={styles.btnArea}>
              <Text style={styles.bntTexto}> <Image source ={require('./assets/pedra.png')}style={styles.img3}></Image></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={()=>jogada(2)}>
          <View style ={styles.btnArea}>
              <Text style={styles.bntTexto}> <Image source ={require('./assets/papel.png')}style={styles.img3}></Image></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={()=>jogada(3)}>
          <View style ={styles.btnArea}>
              <Text style={styles.bntTexto}> <Image source ={require('./assets/tesoura.png')}style={styles.img3}></Image></Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  titulo:{
    fontSize:50,
    fontWeight:'bold',
    color:'orange',
    margin:30,
    fontFamily:'Algerian',
    textAlign:'center',
    flex:1,
  },
  placar:{
    fontSize:25,
    color:'white',
    fontFamily:'Cooper Black',
    fontWeight:'bold',
  },
  forView:{
    flex:2,
    flexDirection:'row', 
    justifyContent:"space-around", 
    alignItems:'center'
  },
  forView2:{
    flex:1,
    textAlign:"center",
    justifyContent:"center", 
  },
  forView3:{
    flex:2,
    flexDirection:'row', 
    justifyContent:"space-around", 
    alignItems:'center',
  },
  img:{
    height:80,
    width:80,
  },
  img2:{
    height:70,
    width:100,
  },
  img3:{
    height:80,
    width:100,
  },
  forView4:{
    flex:1,
    flexDirection:'row', 
    justifyContent:"space-around", 
    alignItems:'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'orange',
    borderRadius:25,
    margin:10
  },
  botao2:{
    width:100,
    height:50,
  },
  btnArea:{
    flex:1,
    alingItems: 'center',
    justifyContent:'center'
  },
  bntTexto:{
    color:'orange',
    fontSize:18,
    fontWeight:'bold',
    textAlign: 'center',
    fontFamily:'Cooper Black',
  },
  forView5:{
    flex:2,
    flexDirection:'row', 
    justifyContent:"space-around", 
    alignItems:'center'
  },
  botaoImg:{
    width: 350,
    height:100,
    margin:10,
  },
});
