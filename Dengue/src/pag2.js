import { useState } from 'react';
import * as React from 'react';
import {  View, Image,StyleSheet,TouchableOpacity, ImageBackground } from 'react-native';

export default function Pag2({ navigation }) {
    return (

     

      <View style={styles.container}>

      <View style={styles.img}> 
          <Image source={require("../image/de.png")}style={{margin:100, width:380,height:200,}} />
      </View>

  <View style={{flexDirection:"row"}}>
     <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Parte1')}> 
        <Image source={require("../assets/parte1.png")}style={{margin:10, width:150,height:150,}} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Parte2')}> 
        <Image source={require("../assets/parte2.png")}style={{margin:5, width:158,height:155,}} />
      </TouchableOpacity>

  </View>
    
  <View style={{flexDirection:"row"}}>
     <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Parte3')}> 
        <Image source={require("../assets/parte3.png")}style={{margin:8, width:150,height:150,}} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Parte4')}> 
        <Image source={require("../assets/parte4.png")}style={{margin:7, width:158,height:150,}} />
      </TouchableOpacity>

  </View>


      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Des')}> 
          <Image source={require("../assets/ir.png")}style={{ width:100,height:55,}}/>
          </TouchableOpacity>

      </View>
    );


  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#9370DB',
      alignItems: 'center',
      justifyContent: 'center',
    },

    img:{
      flex:0,
      alignItems: 'center',
      justifyContent: 'center',


    },
   
    

     
  
  });
