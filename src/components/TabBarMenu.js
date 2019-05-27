import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { habilitaInclusaoContato } from '../actions/AppActions';

const TabBarMenu = props => {
	return (
		<SafeAreaView style={styles.viewPrincipal}>
			<StatusBar />
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<View style={styles.viewNavBarMenu}>
					<Text style={styles.textNavBarMenu}> WhatsBusiness </Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ alignItems: 'center' }}>
						<TouchableOpacity
							onPress={() => {
								Actions.formAdicionarContato();
								props.habilitaInclusaoContato();
							}
							}
							undarlayColor='#114D44'
						>
							<Image source={require('../imgs/adicionar-contato.png')} />
						</TouchableOpacity>

					</View>
					<View>
						<TouchableOpacity
							onPress={() => {
								firebase.auth().signOut()
								.then(() => Actions.formLogin())
							}}
						>
							<Text style={{ fontSize: 20, marginHorizontal: 8, color: '#FFF' }}> Sair </Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<TabBar {...props} style={{ backgroundColor: "#115E54", elevation: 0 }} />
		</SafeAreaView>
	);
}

export default connect(null, { habilitaInclusaoContato })(TabBarMenu)

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