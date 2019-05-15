import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

export default props => {
 return (
  <SafeAreaView style={styles.viewPrincipal}>
   <StatusBar hidden />
   <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={styles.viewNavBarMenu}>
     <Text style={styles.textNavBarMenu}> WhatsBusiness </Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
     <View style={{ alignItems:'center'}}>
      <TouchableOpacity
       onPress={() => Actions.formAdicionarContato()}
       undarlayColor='#114D44'
      >
       <Image source={require('../imgs/adicionar-contato.png')} />
      </TouchableOpacity>

     </View>
     <View>
      <Text style={{ fontSize: 20, marginHorizontal: 8, color: '#FFF' }}> Sair </Text>
     </View>
    </View>
   </View>

   <TabBar {...props} style={{ backgroundColor: "#115E54", elevation: 0 }} />
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 textNavBarMenu: {
  color: '#FFF',
  fontSize: 23,
  justifyContent: 'center',
  marginLeft: 20,
  fontWeight: '400'
 },
 viewPrincipal: {
  backgroundColor: '#115E54',
  elevation: 5,
  marginBottom: 10,
 },
 viewNavBarMenu: {
  height: 50,
  justifyContent: 'center'
 }
});