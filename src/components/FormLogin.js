import React from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaPassword } from '../actions/AutenticacaoActions'

const styles = StyleSheet.create({
   input: {
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      padding: 2,
      marginVertical: 3,
      marginHorizontal: 30,
      borderRadius: 4,
      height: 45,
      color: '#FFF'
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

const FormLogin = props => {
   return (
      <ImageBackground source={require('../imgs/bg.png')} style={{ flex: 1, width: null }}>
         <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'center' }}>
               <Text style={{ fontSize: 25, color: '#FFF' }}>WhatsBusiness</Text>
            </View>
            <View style={{ flex: 2 }}>
               <TextInput
                  placeholder='E-mail'
                  placeholderTextColor='#FFF'
                  value={props.email}
                  onChangeText={textEmail => props.modificaEmail(textEmail)}
                  style={styles.input}
               />
               <TextInput
                  placeholder='Password'
                  placeholderTextColor='#FFF'
                  secureTextEntry
                  value={props.password}
                  onChangeText={textPassword => props.modificaPassword(textPassword)}
                  style={styles.input}
               />
               <TouchableOpacity style={{ alignItems: 'center' }}
                  onPress={() => { Actions.formCadastro(); }}>
                  <Text style={{ fontSize: 20, color: '#FFF', textDecorationLine: 'underline', marginVertical: 10 }}>Cadastre-se</Text>
               </TouchableOpacity>
            </View>
            <View style={{ flex: 2 }}>
               <TouchableOpacity style={styles.button}>
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Acessar</Text>
               </TouchableOpacity>
            </View>
         </View>
      </ImageBackground>
   );
}

const mapStateToProps = state => (
   {
      email: state.AutenticacaoReducer.email,
      password: state.AutenticacaoReducer.password
   }
)


export default connect(mapStateToProps, { modificaEmail, modificaPassword })(FormLogin);