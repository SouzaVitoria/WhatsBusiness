import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Conversa extends Component {
 render() {
  return (
   <View style={styles.viewPrincipal}>
    <View style={{ flex: 1, marginBottom: 50 }}>
     <Text>oi</Text>
    </View>
    <View style={styles.viewInputImage}>
     <TextInput
      placeholder='Write here'
      placeholderTextColor='#000'
      onChangeText={() => false}
      style={styles.input}
     />
     <TouchableOpacity
      style={styles.image}
     >
      <Image source={require('../imgs/enviar_mensagem.png')} style={{ }} />
     </TouchableOpacity>
    </View>
   </View>
  )
 }
}

const styles = StyleSheet.create({
 viewPrincipal: {
  backgroundColor: '#FFF',
  flex: 1
 },
 viewInputImage: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginBottom: 17,
  justifyContent: 'center'
 },
 image: {
  flex: 1,
  marginLeft: 1,
  alignItems:'center',
  justifyContent:'center'
 },
 input: {
  fontSize: 20,
  borderWidth: 1,
  borderBottomColor: '#000',
  padding: 3,
  marginLeft: 20,
  borderRadius: 4,
  height: 50,
  color: '#000',
  flex: 4
 }
});

export default Conversa;