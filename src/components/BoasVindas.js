import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
 image:{
   width: 80,
   height: 80
 },
 view:{
  flex: 2,
  alignItems: 'center',
  justifyContent: 'center'
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
});

export default props => (
 <ImageBackground source={require('../imgs/bg.png')} style={{ flex: 1, width: null }}>
 <View style={{ flex: 1, padding: 15 }}>
  <View style={styles.view}>
   <Text style={{ fontSize: 30, color: '#FFF', fontWeight: '400', padding: 10 }}> Welcome ! </Text>
   <Image source={require( '../imgs/logo.png' )} style={styles.image} /> 
  </View>
  <View style={{ flex: 1 }}>
  <TouchableOpacity
  style={styles.button}
  onPress={() => Actions.formLogin()}
  >
   <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Login </Text>
  </TouchableOpacity>
  </View>
 </View>
 </ImageBackground>
)
