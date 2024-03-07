import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00BF63',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      marginTop:100
    },
    view:{
      backgroundColor: '#00BF63',
      margin: 0,
      padding: 0,
    },
    modal: {
      flex:1,
      backgroundColor: '#E0AE51',
      alignItems: 'center',
      justifyContent: 'center',
    },
    animal: {
      flex: 1,
      backgroundColor: '#00BF63',
      flexDirection: 'row',
      margin:0,
      marginLeft:5,
      width:400,
      resizeMode:'contain'
    },
    buttonStyle: {
      backgroundColor: '#00BF63',
      margin: 8,
      marginLeft:20,
      width: 430,
      height: 165,
      borderRadius: 70,
    },
    imagemAnimalModal: {
      flex: 4,
      backgroundColor: '#00BF63',
      flexDirection: 'row',
      width:320,
      resizeMode:'stretch'
    },
    titleModalView:{
      flex:1,
      alignContent:'center',
      justifyContent:'center',
    },
    buttonModal:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    componentModal:{
      flex:3,
      margin:'25px',
      marginBottom:'35px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleDescModal:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleModalText:{
      fontSize:'30px',
      fontWeight:'bold',
    },
    textDescModal:{
      fontSize:'23px',
      fontWeight:'bold',
    },
    textDesc:{
      fontSize:'16px',
    }
})