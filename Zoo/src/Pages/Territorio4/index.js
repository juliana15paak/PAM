import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';
import styles from './style';
import { Button } from 'react-native-web';

export default function Territorio4(){
  const [isModalVisible0, setIsModalVisible0] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [isModalVisible5, setIsModalVisible5] = useState(false);
  const [isModalVisible6, setIsModalVisible6] = useState(false);
  const [isModalVisible7, setIsModalVisible7] = useState(false);

  const [animalT4, setanimalT4] = useState([
    {nome:'Rinoceronte', 
      tituloDesc:"Descrição: ",
      descricao:"Os rinocerontes são animais herbívoros que vivem na África e na Ásia. Eles são os maiores mamíferos terrestres depois dos elefantes. Os rinocerontes são animais de grande porte, com um comprimento de até 4 metros e um peso de até 3 toneladas. Eles têm uma pele grossa e enrugada, que os protege de predadores. Os rinocerontes têm um chifre na testa, que pode ser usado para defesa ou para cavar. Os rinocerontes são animais solitários, que passam a maior parte do tempo pastando.", 
    },
    {nome:'Zebra', 
      tituloDesc:"Descrição",
      descricao:"As zebras são animais herbívoros que vivem na África. Elas são conhecidas pelas suas listras pretas e brancas, que são únicas para cada indivíduo. As zebras são animais de médio porte, com um comprimento de cerca de 2,5 metros e um peso de até 350 quilos. Elas têm um corpo musculoso e pernas fortes, que as ajudam a correr rapidamente. As zebras se alimentam principalmente de grama, folhas e frutos. Elas são animais ativos durante o dia, e passam a maior parte do tempo pastando."
    },
    {nome:'Girafa', 
      tituloDesc:"Descrição",
      descricao:"As girafas são animais herbívoros que vivem na África. Elas são os animais mais altos do mundo, com um comprimento de até 5,5 metros e um peso de até 1.500 quilos. As girafas têm um pescoço muito longo, que pode medir até 2 metros. Elas usam o pescoço para alcançar folhas e frutos de árvores altas. As girafas têm uma pelagem marrom-amarelada, com manchas marrons mais escuras. As manchas das girafas são únicas para cada indivíduo. As girafas têm uma língua azul, e podem dormir em pé!"
    },
    {nome:'Suricata', 
      tituloDesc:"Descrição",
      descricao:"As suricatas são pequenos mamíferos carnívoros que vivem nas savanas e desertos da África. Elas são conhecidas por suas habilidades de escavação e por sua vida social. As suricatas são animais de pequeno porte, com um comprimento de cerca de 25 centímetros e um peso de até 700 gramas. Elas têm uma pelagem marrom-avermelhada, com uma faixa preta na testa. As suricatas são animais muito inteligentes. Elas são capazes de construir complexos sistemas de túneis subterrâneos, onde vivem e criam seus filhotes.",
    },
    {nome:'Dromedário', 
      tituloDesc:"Descrição",
      descricao:"Os dromedários são animais mamíferos que vivem no deserto. Eles são parentes dos camelos, mas têm apenas uma corcova. Os dromedários são animais de grande porte, com um comprimento de até 3 metros e um peso de até 600 quilos. Eles têm pernas longas e fortes, que os ajudam a andar sobre a areia. Os dromedários são animais herbívoros, e se alimentam principalmente de grama e folhas. Eles são capazes de sobreviver por longos períodos sem água, pois armazenam água na sua corcova."
    },
    {nome:'Leão', 
      tituloDesc:"Descrição",
      descricao:"Os leões são animais mamíferos que vivem nas savanas da África e da Ásia. Eles são os felinos mais sociais do mundo, e vivem em grupos chamados de 'alcateias'. Os leões são animais de grande porte, com um comprimento de até 2,5 metros e um peso de até 270 quilos. Eles têm uma pelagem amarela com manchas escuras, e os machos têm uma juba imponente. Os leões são animais carnívoros, e se alimentam principalmente de grandes herbívoros, como zebras, gnus e antílopes."
    },
    {nome:'Tigre', 
      tituloDesc:"Descrição",
      descricao:"Os tigres são animais mamíferos que vivem nas florestas da Ásia. Eles são os felinos mais grandes do mundo, com um comprimento de até 3 metros e um peso de até 300 quilos. Os tigres têm uma pelagem laranja-avermelhada com linhas pretas verticais. As linhas dos tigres são únicas para cada tigre. Os tigres são animais carnívoros, e se alimentam principalmente de grandes herbívoros, como cervos, búfalos e javalis. Eles são caçadores solitários, e atacam suas presas de surpresa."
    },
    {nome:'Hipopótamo', 
      tituloDesc:"Descrição",
      descricao:"Os hipopótamos são animais mamíferos que vivem na África. Eles podem pesar até 4 toneladas! Os hipopótamos têm um corpo robusto e musculoso, com uma pele grossa e marrom-acinzentada. Eles têm uma cabeça grande com olhos pequenos e orelhas curtas. Os hipopótamos são animais semiaquáticos, e passam a maior parte do tempo na água. Eles são excelentes nadadores e mergulhadores, e podem ficar submersos por até cinco minutos. Os hipopótamos são os parentes vivos mais próximos dos golfinhos!"
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible0(true)}> 
          <Image source={require("./../../../assets/animais/animal1-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible1(true)}> 
          <Image source={require("./../../../assets/animais/animal2-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible2(true)}> 
          <Image source={require("./../../../assets/animais/animal3-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible3(true)}> 
          <Image source={require("./../../../assets/animais/animal4-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible4(true)}> 
          <Image source={require("./../../../assets/animais/animal5-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible5(true)}> 
          <Image source={require("./../../../assets/animais/animal6-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible6(true)}> 
          <Image source={require("./../../../assets/animais/animal7-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setIsModalVisible7(true)}> 
          <Image source={require("./../../../assets/animais/animal8-t4.jpg")}style={styles.animal} />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={isModalVisible0} onRequestClose={() => setIsModalVisible0(false)}>
      <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[0].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/rinoceronte.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[0].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[0].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible0(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[1].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/zebra.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[1].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[1].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible1(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible2} onRequestClose={() => setIsModalVisible2(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[2].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/girafa.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[2].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[2].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible2(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible3} onRequestClose={() => setIsModalVisible3(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[3].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/suricata.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[3].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[3].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible3(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible4} onRequestClose={() => setIsModalVisible4(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[4].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/dromedario.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[4].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[4].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible4(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible5} onRequestClose={() => setIsModalVisible5(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[5].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/leao.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[5].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[5].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible5(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible6} onRequestClose={() => setIsModalVisible6(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[6].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/tigre.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[6].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[6].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible6(false)}></Button></View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isModalVisible7} onRequestClose={() => setIsModalVisible7(false)}>
        <View style={styles.modal}>
          <View style={styles.titleModalView}><Text style={styles.titleModalText}>{animalT4[7].nome}</Text></View>
          <Image source={require("./../../../assets/animaisR/hipopotamo.jpg")}style={styles.imagemAnimalModal} />
          <View style={styles.titleDescModal}><Text style={styles.textDescModal}>{animalT4[7].tituloDesc}</Text></View>
          <View style={styles.componentModal}><Text style={styles.textDesc}>{animalT4[7].descricao}</Text></View>
          <View style={styles.buttonModal}><Button title="Voltar" color="#039944"  onPress={() => setIsModalVisible7(false)}></Button></View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}