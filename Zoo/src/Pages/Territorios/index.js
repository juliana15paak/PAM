import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity,Image } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Territorios(){
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio1')}> 
          <Image source={require("./../../../assets/t1.jpg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio2')}> 
          <Image source={require("./../../../assets/t2.jpg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio3')}> 
          <Image source={require("./../../../assets/t3.jpg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio4')}> 
          <Image source={require("./../../../assets/t4.jpeg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio5')}> 
          <Image source={require("./../../../assets/t5.jpg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorio6')}> 
          <Image source={require("./../../../assets/t6.jpg")}style={styles.t1} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
   
  );
}