import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

const AdicionarContato = props => (
 <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }} >
  <TextInput
   style={styles.input}
   placeholder='E-mail'
   color='#000'
   value={props.adiciona_contato_email}
   onChangeText={textoModificaAdicionaContato => props.modificaAdicionaContatoEmail(textoModificaAdicionaContato)}
  />
  <View>
   <TouchableOpacity
    style={styles.button}
    onPress={() => props.adicionaContato(props.adiciona_contato_email)}
   >
    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Salvar </Text>
   </TouchableOpacity>
   <Text style={{ color: '#FF0000', fontSize: 18, marginHorizontal: 30, marginVertical: 10 }}> {props.cadastro_resultado_txt_erro} </Text>
  </View>
 </View>
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
  marginTop: 40,
  marginHorizontal: 40
 }
})

const mapStateToProps = state => (
 {
  adiciona_contato_email: state.AppReducer.adiciona_contato_email,
  cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro
 }
)


export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);