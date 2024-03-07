import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00BF63',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      flex: 1,
    },
    form:{
      flex: 3,
      widht:"98%",
      padding:5,
    },
    botao:{
      flex: 1,
    },
    buttonStyle: {
      flexDirection: 'row', 
      alignItems: 'center', 
      margin: 5, 
    },
    botaoImg: {
      margin:10,
      width:150,
      height:50,
    },
    iconImg: {
      margin:30,
      width:140,
      height:140,
    },
    input:{
      backgroundColor:"white",
      borderRadius:5,
      padding:10,
      width:'100%'
    },
    title:{
      color: "#fff",
      fontSize: "25px",
      fontFamily: "Verdana",
      textAlign: 'center',
      fontWeight:'bold',
      margin:5,
      marginTop:50,
    },
    text:{
      color: "#fff",
      fontSize: "16px",
      margin:2,
      marginTop:15,
    },

})