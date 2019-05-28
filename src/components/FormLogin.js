import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaUser, modificaPassword, autenticarUser } from '../actions/AutenticacaoActions'

class FormLogin extends Component {
   _autenticarUser() {
      const { email, password } = this.props;
      this.props.autenticarUser({ email, password });
   }

   renderBtnAcessar() {
      if (this.props.loadingLogin) {
         return (
            <View style={styles.loading}>
               <ActivityIndicator size="large" />
            </View>
         )
      } else {
         return (
            <TouchableOpacity
               style={styles.button}
               onPress={() => this._autenticarUser()}
            >
               <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Acessar </Text>
            </TouchableOpacity>
         )
      }
   }

   render() {
      return (
         <ImageBackground source={require('../imgs/bg.png')} style={{ flex: 1, width: null }}>
            <View style={{ flex: 1, padding: 10 }}>
               <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 25, color: '#FFF', fontWeight: '700' }}> WhatsBusiness </Text>
               </View>
               <View style={{ flex: 2, justifyContent: 'center' }}>
                  <TextInput
                     placeholder='E-mail'
                     placeholderTextColor='#FFF'
                     value={this.props.email.toLowerCase()}
                     onChangeText={textEmail => this.props.modificaEmail(textEmail)}
                     style={styles.input}
                  />
                  <TextInput
                     placeholder='Password'
                     placeholderTextColor='#FFF'
                     secureTextEntry
                     value={this.props.password}
                     onChangeText={textPassword => this.props.modificaPassword(textPassword)}
                     style={styles.input}
                  />
                  <TouchableOpacity style={{ alignItems: 'center' }}
                     onPress={() => { Actions.formCadastro(); }}>
                     <Text style={{ fontSize: 22, color: '#FFF', textDecorationLine: 'underline', marginTop: 20 }}>Cadastre-se</Text>
                  </TouchableOpacity>
                  <Text style={{ color: '#FF0000', fontSize: 18, marginHorizontal: 30, marginTop: 2, marginBottom: 2 }}> {this.props.registerError} </Text>
               </View>
               <View style={{ flex: 2 }}>
                  {this.renderBtnAcessar()}
               </View>
            </View>
         </ImageBackground>
      );
   }

}

const mapStateToProps = state => (
   {
      email: state.AutenticacaoReducer.email,
      user: state.AutenticacaoReducer.user,
      password: state.AutenticacaoReducer.password,
      registerError: state.AutenticacaoReducer.registerError,
      loadingLogin: state.AutenticacaoReducer.loadingLogin
   }
)


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
   },
   loading: {
      padding: 10,
      margin: 40
   }
})

export default connect(mapStateToProps, { modificaUser, modificaEmail, modificaPassword, autenticarUser })(FormLogin);