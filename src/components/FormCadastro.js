import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FormCadastro extends Component {
 render() {
  return (
   <View style={{ flex: 1, padding: 10, backgroundColor: '#f9fdff' }}>
    <View style={{ flex: 4, justifyContent: 'center' }}>
     <TextInput placeholder='Name' style={styles.input} />
     <TextInput placeholder='E-mail' style={styles.input} />
     <TextInput placeholder='Password' style={styles.input} />
    </View>
    <View style={{ flex: 1 }}>
     <TouchableOpacity style={styles.button} >
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Cadastrar</Text>
     </TouchableOpacity>
    </View>
   </View>
  );
 }
}


const styles = StyleSheet.create({
 input: {
  fontSize: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#000',
  padding: 2,
  marginVertical: 3,
  marginHorizontal: 10,
  borderRadius: 4,
  height: 45
 },
 button: {
  borderWidth: 1,
  borderColor: '#000',
  backgroundColor: '#115E54',
  borderRadius: 5,
  alignItems: 'center',
  padding: 10,
  margin: 40
 }
})