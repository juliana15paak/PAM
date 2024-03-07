import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio1(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);

  const [animalT1, setAnimalT1] = useState([
    {nome:'Onça-Pintada', 
      tituloDesc:"Descrição: ",
      descricao:"A onça-pintada é um animal muito bonito e especial. Ela é o maior felino das Américas e pode ser encontrada em várias partes do continente, incluindo o Brasil. As onças-pintadas têm uma pelagem amarelo-dourada com manchas pretas em formato de rosetas. Essas manchas ajudam as onças a se camuflarem na floresta, o que as torna mais difíceis de serem vistas por suas presas. As onças-pintadas são animais muito fortes e ágeis. Elas são ótimas caçadoras e podem capturar presas maiores do que elas mesmas.", 
    },
    {nome:'Onça-Parda', 
      tituloDesc:"Descrição",
      descricao:"A Onça-Parda é um animal bonito e forte que vive na floresta. Ela é um felino, assim como o gato e o leão. A Onça-Parda tem um corpo musculoso e uma cauda longa. Sua pelagem é marrom-avermelhada com manchas pretas. A Onça-Parda é um animal carnívoro. Ela se alimenta de animais como capivaras, veados e pacas. A Onça-Parda é um animal solitário. Ela só se junta a outros animais para acasalar. A Onça-Parda também é um animal ameaçado de extinção. É importante protegê-la para que ela continue vivendo na floresta."
    },
    {nome:'Jacarés/Cágados', 
      tituloDesc:"Descrição",
      descricao:"Jacarés e cágados são animais que vivem na água. Eles são parentes dos lagartos, mas têm um corpo mais alongado e uma pele mais grossa. Os jacarés são animais carnívoros. Eles se alimentam de peixes, aves, mamíferos e até mesmo de outros jacarés. Os jacarés são animais perigosos, e é importante ter cuidado ao se aproximar deles. Os cágados são animais herbívoros. Eles se alimentam de plantas, como folhas, flores e frutos. Os cágados são animais pacíficos, e não representam perigo para os seres humanos."
    },
    {nome:'Elefante', 
      tituloDesc:"Descrição",
      descricao:"O elefante é um animal muito grande e forte. Ele é o maior mamífero terrestre do mundo e pode pesar até 7 toneladas! Os elefantes têm uma tromba comprida e fina que pode ser usada para pegar coisas, beber água, tomar banho e até mesmo se comunicar. Eles também têm presas grandes e afiadas, que são feitas de marfim. Os elefantes são animais herbívoros e se alimentam de folhas, galhos, frutas e raízes. Eles vivem em grupos chamados manadas, são animais muito inteligentes e sociáveis.",
    },
    {nome:'Flamingos', 
      tituloDesc:"Descrição",
      descricao:"Flamingos são aves bonitas e coloridas que vivem em lagos e pântanos. Eles são parentes dos cisnes e gansos, mas têm pernas mais longas e pescoços mais finos. Os flamingos têm penas rosadas ou avermelhadas. A cor de suas penas vem da comida que eles comem. Eles se alimentam de pequenos crustáceos que vivem no fundo da água. Esses crustáceos contêm um pigmento chamado carotenóide, que dá a cor às penas dos flamingos. Os flamingos são animais sociais. Eles vivem em grandes bandos."
    },
    {nome:'Pequenos Felinos', 
      tituloDesc:"Descrição",
      descricao:"Os pequenos felinos são animais bonitos e misteriosos que vivem em todo o mundo. Eles são parentes dos gatos domésticos, mas são menores e mais selvagens. Os pequenos felinos são animais carnívoros. Eles se alimentam de pequenos animais, como roedores, pássaros e répteis. Eles são caçadores ágeis e furtivos, e usam suas garras e dentes afiados para capturar suas presas. Alguns exemplos de pequenos felinos incluem: Gato-do-mato, Jaguatirica, Gato-maracajá, Gato-mourisco e Lince"
    },
    {nome:'Quati', 
      tituloDesc:"Descrição",
      descricao:"O quati é um mamífero bonito e curioso que vive na América do Sul. O quati tem um corpo esguio e uma cauda longa. Sua pelagem é marrom-avermelhada ou castanho-amarelada. Ele tem um focinho longo e pontudo, que usa para cheirar o ambiente. O quati é um animal social. Ele vive em grupos de até 30 indivíduos. Os grupos de quati são liderados por uma fêmea alfa. O quati é um animal onívoro. Ele se alimenta de frutas, insetos, pequenos animais e até mesmo de carniça."
    },
    {nome:'Lobo-Guará', 
      tituloDesc:"Descrição",
      descricao:"O lobo-guará é um animal bonito e imponente que vive no cerrado brasileiro. Ele é o maior canídeo da América do Sul, com um comprimento de até 1,2 metro e uma altura de até 90 cm. Sua pelagem é laranja avermelhada, com manchas pretas e brancas. O lobo-guará é um animal solitário. Ele só se junta a outros lobos para acasalar. Ele é uma espécie ameaçada de extinção. As principais ameaças ao lobo-guará são a caça, a perda de habitat e o atropelamento nas estradas."
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal3-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible4(true)}> 
          <Image source={require("./../../../assets/animais/animal5-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible5(true)}> 
          <Image source={require("./../../../assets/animais/animal6-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible6(true)}> 
          <Image source={require("./../../../assets/animais/animal7-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible7(true)}> 
          <Image source={require("./../../../assets/animais/animal8-t1.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/oncapintada.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/oncaparda.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/jacare.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/elefante.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible4} onRequestClose={() => setIsModalVisible4(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[4].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/flamingo.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[4].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[4].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible4(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible5} onRequestClose={() => setIsModalVisible5(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[5].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/pequenosfelinos.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[5].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[5].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible5(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible6} onRequestClose={() => setIsModalVisible6(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[6].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/quati.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[6].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[6].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible6(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible7} onRequestClose={() => setIsModalVisible7(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT1[7].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/loboguara.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT1[7].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT1[7].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible7(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}