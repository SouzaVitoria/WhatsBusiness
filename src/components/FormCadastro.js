import React from 'react';
import { View, TextInput, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { modificaName, modificaEmail, modificaPassword } from '../actions/AutenticacaoActions';

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

const FormCadastro = props => {
 return (
  <ImageBackground source={require('../imgs/bg.png')} style={{ flex: 1 }}>
   <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 3, justifyContent: 'center' }}>
     <TextInput
      placeholder='Name'
      placeholderTextColor='#FFF'
      value={props.name}
      onChangeText={txtName => props.modificaName(txtName)}
      style={styles.input}
     />
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
    </View>
    <View style={{ flex: 2 }}>
     <TouchableOpacity style={styles.button} >
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Cadastrar</Text>
     </TouchableOpacity>
    </View>
   </View>
  </ImageBackground>
 );
}

const mapStateToProps = state => (
 {
  name: state.AutenticacaoReducer.name,
  email: state.AutenticacaoReducer.email,
  password: state.AutenticacaoReducer.password
 }
)

export default connect(mapStateToProps, { modificaName, modificaEmail, modificaPassword })(FormCadastro);