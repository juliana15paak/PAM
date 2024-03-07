import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio5(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const [animalT5, setanimalT5] = useState([
    {nome:'Águias', 
      tituloDesc:"Descrição: ",
      descricao:"As águias são aves de rapina que vivem em todo o mundo. Elas são animais imponentes, com uma visão aguçada e um voo poderoso. As águias são animais de grande porte, com um comprimento de até 1,5 metros e uma envergadura de asas de até 2,5 metros. Elas têm uma plumagem espessa e colorida, que pode ser marrom, branca ou preta. As águias são animais carnívoros, e se alimentam principalmente de mamíferos, aves e peixes. Elas são caçadoras habilidosas, e usam sua visão aguçada para localizar suas presas.", 
    },
    {nome:'Gaviões', 
      tituloDesc:"Descrição",
      descricao:"Os gaviões são aves de rapina que vivem em todo o mundo, principalmente em áreas abertas, como campos, florestas e savanas. Os gaviões são animais de médio porte, com um comprimento de até 70 centímetros e uma envergadura de asas de até 1,5 metros. Eles têm uma plumagem espessa e colorida, que pode ser marrom, cinza ou preta. Os gaviões são animais carnívoros, e se alimentam principalmente de pequenos mamíferos, aves e répteis. Os gaviões são animais sociais, e vivem em pares ou em grupos pequenos. "
    },
    {nome:'Harpia', 
      tituloDesc:"Descrição",
      descricao:"A harpia é a maior águia das Américas, e também é a maior águia do mundo. Ela vive nas florestas tropicais da América do Sul e Central. A harpia é um animal imponente, uma caçadora habilidosa, com um comprimento de até 1,05 metros e uma envergadura de asas de até 2,1 metros. Ela tem uma plumagem marrom-escura com manchas brancas, e um bico forte e curvo. As harpias são animais carnívoros, e se alimentam principalmente de mamíferos de médio porte, como macacos, preguiças e porcos-espinhos."
    },
    {nome:'Condor', 
      tituloDesc:"Descrição",
      descricao:"Os condores são aves de rapina que vivem nas montanhas da América do Sul. Os condores têm uma plumagem preta com manchas brancas nas asas e na cauda. Eles têm uma cabeça grande e um bico forte. Os condores são animais carnívoros, e se alimentam principalmente de carcaças de animais mortos. Os condores são animais sociais, e vivem em grupos chamados de 'bandos'. Eles são animais monogâmicos, e formam pares que duram a vida toda. Os condores podem voar por até 5 horas sem pousar!",
    },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t5.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t5.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal3-t5.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t5.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
      <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT5[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/aguia.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT5[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT5[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT5[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/gaviao.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT5[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT5[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT5[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/harpia.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT5[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT5[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT5[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/condor.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT5[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT5[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}