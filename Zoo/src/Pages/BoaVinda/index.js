import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function BoaVinda() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Territorios')}> 
        <Image source={require("./../../../assets/boavinda.png")}style={styles.boavinda} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}