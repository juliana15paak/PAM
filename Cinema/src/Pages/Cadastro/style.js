import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00003A',
      alignItems: 'center',
      justifyContent: 'center',
    },

    icon:{
      flex: 1,
    },
    form:{
      flex: 3,
    },
    botao:{
      flex: 1,
    },

    iconImg: {
      margin:30,
      width:140,
      height:140,
    },

    input:{
      backgroundColor:"white",
      borderRadius:15,
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
      marginTop:20,
    },

    buttonStyle: {
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    botaoText: {
      width:150,
      height:50,
      marginTop:15,
      backgroundColor: '#B52D39',
      borderRadius:50,
      textAlign:'center',
      padding:10,
      fontSize:20,
      color:'#FFF',
      fontWeight:'bold',
      fontFamily: "Verdana",
    },
})