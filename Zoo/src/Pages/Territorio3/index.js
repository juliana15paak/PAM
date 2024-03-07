import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio3(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);

  const [animalT3, setanimalT3] = useState([
    {nome:'Axolotes', 
      tituloDesc:"Descrição: ",
      descricao:"O axolote é um anfíbio aquático que vive no México. Ele é um animal muito curioso, pois não passa pela metamorfose completa. Isso significa que ele permanece na fase de larva, mesmo quando adulto. Os axolotes têm uma aparência única, com brânquias externas, cauda comprida e patas palmadas. Eles são animais carnívoros e se alimentam de pequenos animais, como insetos, vermes e peixes. Os axolotes podem regenerar partes do corpo, como membros, olhos e até mesmo o coração.", 
    },
    {nome:'Raposinha-do-campo', 
      tituloDesc:"Descrição",
      descricao:"A raposinha-do-campo é um pequeno canídeo que vive no Cerrado brasileiro. Ela é um animal ameaçado de extinção. A raposinha-do-campo tem um tamanho de cerca de 60 centímetros de comprimento, e pesa entre 2 e 4 quilos. Ela tem uma pelagem curta e macia, com uma coloração cinza-amarelada nas partes superiores do corpo e branca nas partes inferiores. Ela tem uma cauda longa e peluda, que usa para se equilibrar quando corre ou escala."
    },
    {nome:'Tamanduá-bandeira', 
      tituloDesc:"Descrição",
      descricao:"Os tamanduás-bandeira têm uma pelagem marrom-acinzentada, com faixas brancas e pretas nas costas. Eles são os únicos mamíferos que não têm dentes. Eles usam as suas garras para rasgar os ninhos de formigas e cupins, que são o principal alimento deles. Os tamanduás-bandeira são animais solitários, e passam a maior parte do tempo procurando comida. Os tamanduás-bandeira são muito fortes. Eles podem levantar objetos com o peso de até 20 vezes o seu próprio peso.",
    },
    {nome:'Urso-de-óculos', 
      tituloDesc:"Descrição",
      descricao:"O urso-de-oculos é o único urso nativo da América do Sul. Ele vive nas florestas andinas, entre 1.800 e 4.000 metros de altitude. O urso-de-oculos é um animal de médio porte, com um comprimento de cerca de 1,8 metros e um peso de até 110 quilos. Ele tem uma pelagem marrom-escura, com manchas brancas em volta dos olhos, que parecem óculos. Os urso-de-oculos são excelentes escaladores. Eles podem subir árvores para pegar frutas e fugir de predadores."
    },
    {nome:'Dinossauros', 
      tituloDesc:"Descrição",
      descricao:"Os dinossauros viveram na Terra por mais de 160 milhões de anos. Eles eram répteis, mas eram muito diferentes dos répteis que conhecemos hoje. Os dinossauros tinham penas, pernas longas e caudas longas. Eles podiam ser herbívoros, carnívoros ou onívoros. Havia dinossauros de todos os tamanhos, desde o pequeno Compsognathus, que era do tamanho de um cachorro, até o enorme Brachiosaurus, que era do tamanho de um prédio de cinco andares."
    },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t3.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t3.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t3.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal5-t3.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible4(true)}> 
          <Image source={require("./../../../assets/animais/animal6-t3.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
      <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT3[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/axolote.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT3[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT3[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT3[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/raposa.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT3[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT3[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT3[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/tamandua.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT3[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT3[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT3[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/urso.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT3[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT3[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible4} onRequestClose={() => setIsModalVisible4(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT3[4].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/dinossauro.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT3[4].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT3[4].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible4(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}