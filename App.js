  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import logo from './assets/wall.jpg'; 
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} /> 
      <Text style={styles.Heading}>SIGN UP </Text>
      <TextInput style={styles.input}  placeholder={"Name"} />
      <TextInput style={styles.input} placeholder={"FName"} />
      <TextInput style={styles.input} placeholder={"Email"} />
      <TextInput style={styles.input} secureTextEntry={true} TextInput='password' placeholder={"Password"} />
      <TouchableOpacity   style={styles.btn}> 
      <Text style={styles.btnText}>Submit!</Text>
      
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:100,
  },


  Heading:{
         color: "black",
         fontSize: 25,
  },

  input:{
    height: 50,
    width:180,
     borderColor: 'gray', 
     borderWidth: 1,
     marginTop:20,
     borderRadius:10,
     paddingLeft:10,
     margin:0,
  },

btn:{
  height: 50,
  width:180, 
  marginTop:20,
  backgroundColor:"green",
  borderRadius:10,
},
btnText:{
     
      alignItems:'center',
      justifyContent: 'center',
      color:"white",
      fontSize:20,
      marginLeft:58,
      marginTop:8,

},






});