import React, { Component } from 'react';
import { View, TextInput, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { modificaName, modificaEmail, modificaPassword, cadastraUser } from '../actions/AutenticacaoActions';

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

class FormCadastro extends Component {
 _cadastraUser() {
  const name = this.props.name;
  const email = this.props.email;
  const password = this.props.password;
  // const { name, email, password } = this.props;

  this.props.cadastraUser({ name, email, password });
 }

 render() {
  return (
   <ImageBackground source={require('../imgs/bg.png')} style={{ flex: 1 }}>
    <View style={{ flex: 1, padding: 10 }}>
     <View style={{ flex: 3, justifyContent: 'center' }}>
      <TextInput
       placeholder='Name'
       placeholderTextColor='#FFF'
       value={this.props.name}
       onChangeText={txtName => this.props.modificaName(txtName)}
       style={styles.input}
      />
      <TextInput
       placeholder='E-mail'
       placeholderTextColor='#FFF'
       value={this.props.email}
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
      <Text style={{ color: '#FF0000', fontSize: 18, marginHorizontal:30, marginVertical: 10 }}> {this.props.registerError} </Text>
     </View>
     <View style={{ flex: 2 }}>
      <TouchableOpacity
       style={styles.button}
       onPress={() => this._cadastraUser()}
      >
       <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Cadastrar</Text>
      </TouchableOpacity>
     </View>
    </View>
   </ImageBackground>
  );
 }

}

const mapStateToProps = state => (
 {
  name: state.AutenticacaoReducer.name,
  email: state.AutenticacaoReducer.email,
  password: state.AutenticacaoReducer.password,
  registerError: state.AutenticacaoReducer.registerError
 }
)

export default connect(mapStateToProps, { modificaName, modificaEmail, modificaPassword, cadastraUser })(FormCadastro);