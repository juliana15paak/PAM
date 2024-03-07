import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio2(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);

  const [animalT2, setAnimalT2] = useState([
    {nome:'Araras', 
      tituloDesc:"Descrição: ",
      descricao:"As araras são aves bonitas e coloridas que vivem nas Américas. Elas são da família dos psitacídeos, a mesma da cacatua, do papagaio e do periquito. As araras têm um corpo grande e uma cauda longa. Suas penas são coloridas, geralmente em vermelho, azul, amarelo ou verde. Elas têm um bico forte e curvo, que usam para quebrar sementes e nozes. As araras são animais sociais. Elas vivem em grupos chamados de bandos. Os bandos de araras podem ter até 30 indivíduos."
     },
    {nome:'Papagaios', 
      tituloDesc:"Descrição",
      descricao:"Os papagaios vivem em todo o mundo. Eles são da família dos psitacídeos, a mesma da cacatua, da arara e do periquito. Os papagaios têm um corpo robusto e uma cauda longa. Suas penas são geralmente verdes, mas também podem ser vermelhas, azuis ou amarelas. Eles têm um bico forte e curvo, que usam para comer frutas, sementes e nozes. Os papagaios são animais inteligentes. Eles são capazes de aprender a imitar a fala humana, bem como outras habilidades, como abrir fechaduras e usar ferramentas."
    },
    {nome:'Serpentes', 
      tituloDesc:"Descrição",
      descricao:"As serpentes são répteis que não têm patas. Elas têm um corpo longo e flexível, que as ajuda a rastejar pelo chão. As serpentes têm escamas que as protegem do sol e de outros animais. As serpentes são animais carnívoros. Elas se alimentam de pequenos animais, como roedores, aves, lagartos e outros répteis. As serpentes usam seus dentes afiados para matar suas presas. As serpentes podem ser venenosas ou não venenosas. As serpentes venenosas têm presas que injetam veneno em suas presas. "
    },
    {nome:'Micos', 
      tituloDesc:"Descrição",
      descricao:"O elefante é um animal muito grande e forte. Ele é o maior mamífero terrestre do mundo e pode pesar até 7 toneladas! Os elefantes têm uma tromba comprida e fina que pode ser usada para pegar coisas, beber água, tomar banho e até mesmo se comunicar. Eles também têm presas grandes e afiadas, que são feitas de marfim. Os elefantes são animais herbívoros e se alimentam de folhas, galhos, frutas e raízes. Eles vivem em grupos chamados manadas, são animais muito inteligentes e sociáveis.",
    },
    {nome:'Anfíbios', 
      tituloDesc:"Descrição",
      descricao:"Os anfíbios são animais vertebrados que vivem na água e na terra. Eles são os únicos animais que passam por uma metamorfose, que é uma mudança completa em sua aparência e forma ao longo da vida. Os anfíbios têm uma pele úmida e lisa, que os ajuda a respirar. Eles têm pulmões para respirar ar, mas também podem absorver oxigênio através da pele. Os anfíbios são animais carnívoros. Eles se alimentam de pequenos animais, como insetos, vermes e até mesmo outros anfíbios."
    },
    {nome:'Formigueiro', 
      tituloDesc:"Descrição",
      descricao:"As formigas são pequenos insetos que vivem em colônias chamadas de formigueiros. Cada formiga tem uma função na colônia. As formigas operárias são as responsáveis por coletar comida, cuidar dos filhotes e proteger o formigueiro. As formigas soldados são maiores e mais fortes do que as operárias, e elas são responsáveis por defender a colônia de predadores. As formigas rainhas são as únicas que podem se reproduzir. Elas colocam ovos que se transformam em larvas, depois em pupas e, finalmente, em formigas adultas."
    },
    {nome:'Invertebrados', 
      tituloDesc:"Descrição",
      descricao:"Os invertebrados são animais que não têm coluna vertebral. Eles são o grupo de animais mais diverso do mundo, com mais de 30 tipos diferentes. Os invertebrados podem ser encontrados em todos os lugares do mundo, em uma variedade de habitats, incluindo a água, a terra e o ar. Os invertebrados têm uma variedade de formas e tamanhos. Alguns são muito pequenos, como as bactérias e os protozoários, enquanto outros são muito grandes, como as baleias-azuis. Alguns exemplos são: insetos, aranhas, lulas, minhocas e águas-vivas."
    },
    {nome:'Corujas', 
      tituloDesc:"Descrição",
      descricao:"As corujas são animais notunas que têm uma aparência distinta, com cabeças grandes, olhos grandes e penas macias. Elas têm uma visão e audição muito boas, o que as ajuda a caçar à noite. As corujas são animais carnívoros. Elas se alimentam de uma variedade de animais, incluindo insetos, roedores, aves e até mesmo pequenos mamíferos. As corujas têm um pescoço que pode girar 270 graus, o que lhes permite ver em todas as direções sem mover a cabeça, e elas podem voar sem fazer barulho."
    },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal3-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible4(true)}> 
          <Image source={require("./../../../assets/animais/animal5-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible5(true)}> 
          <Image source={require("./../../../assets/animais/animal6-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible6(true)}> 
          <Image source={require("./../../../assets/animais/animal7-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible7(true)}> 
          <Image source={require("./../../../assets/animais/animal8-t2.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
      <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/araras.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/papagaio.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/serpente.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/micos.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible4} onRequestClose={() => setIsModalVisible4(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[4].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/anfibios.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[4].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[4].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible4(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible5} onRequestClose={() => setIsModalVisible5(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[5].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/formigueiro.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[5].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[5].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible5(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible6} onRequestClose={() => setIsModalVisible6(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[6].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/invertebrados.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[6].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[6].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible6(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible7} onRequestClose={() => setIsModalVisible7(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT2[7].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/coruja.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT2[7].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT2[7].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible7(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}