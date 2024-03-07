import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio6(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [animalT6, setanimalT6] = useState([
    {nome:'Chimpanzé', 
      tituloDesc:"Descrição: ",
      descricao:"Os chimpanzés são grandes primatas que vivem na África. Eles são nossos parentes vivos mais próximos, compartilhando cerca de 98% de nosso DNA. Os chimpanzés se comunicam usando uma variedade de métodos, incluindo linguagem corporal e vocalizações, para expressar emoções, como medo, alegria ou raiva. Os chimpanzés são animais inteligentes, capazes de usar ferramentas, resolver problemas e até mesmo aprender línguas de sinais. Eles também são animais curiosos e brincalhões, e adoram explorar o ambiente."
    },
    {nome:'Orangotango', 
      tituloDesc:"Descrição",
      descricao:"Os orangotangos são primatas grandes e peludos que vivem nas florestas tropicais da ilha de Bornéu, na Ásia. Eles são os únicos grandes primatas que vivem fora da África, e são nossos parentes vivos mais próximos, compartilhando cerca de 97% de nosso DNA. Os orangotangos são animais solitários, e cada indivíduo vive em seu próprio território. Eles passam a maior parte do tempo nas árvores, onde se alimentam de frutas, folhas, insetos e pequenos mamíferos. São animais inteligentes e curiosos."
    },
    {nome:'Primatas Brasileiros', 
      tituloDesc:"Descrição",
      descricao:"O Brasil é o país com a maior biodiversidade de primatas do mundo. Algumas espécies de primatas brasileiros: Macacos-aranha: são os maiores primatas brasileiros, podendo pesar até 10 quilos. Macacos-prego: são de tamanho médio, famosos por sua inteligência e capacidade de aprender truques. Muriquis: são os mais numerosos do Brasil, conhecidos por sua pelagem branca e pela capacidade de se agarrar às árvores com as pernas e os braços. Saguis: são pequenos, conhecidos por sua agilidade e capacidade de saltar de árvore em árvore."
    },
    {nome:'Muriqui-do-sul', 
      tituloDesc:"Descrição",
      descricao:"O muriqui-do-sul pode pesar até 15 quilos e medir até 1,60 metro de comprimento. Os muriquis-do-sul são animais onívoros, e sua dieta consiste principalmente de frutas, folhas, flores e insetos. Eles também podem comer sementes, nozes e pequenos animais. Os muriquis-do-sul são animais muito afetuosos. Eles são animais muito barulhentos, e usam uma variedade de sons para se comunicar uns com os outros. Os muriquis-do-sul são animais muito inteligentes, e são capazes de aprender a resolver problemas."
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t6.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t6.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal3-t6.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t6.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT6[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/chimpanze.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT6[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT6[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT6[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/orangotango.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT6[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT6[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT6[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/primatasbr.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT6[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT6[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT6[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/muriqui.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT6[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT6[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}