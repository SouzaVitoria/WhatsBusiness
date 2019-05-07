import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FormLogin extends Component {
 render() {
  return (
   <View style={{ flex: 1, backgroundColor: '#f9fdff', padding: 10 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{ fontSize: 25 }}>WhatsBusiness</Text>
    </View>
    <View style={{ flex: 1 }}>
     <TextInput placeholder='E-mail' style={styles.input}></TextInput>
     <TextInput placeholder='Password' style={styles.input}></TextInput>
     <TouchableOpacity style={{ alignItems: 'center' }}
      onPress={() => { Actions.formCadastro(); }}>
      <Text style={{ fontSize: 20, color: '#475aff', textDecorationLine: 'underline' }}>Cadastre-se</Text>
     </TouchableOpacity>

    </View>
    <View style={{ flex: 1 }}>

     <TouchableOpacity style={styles.button}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Acessar</Text>
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