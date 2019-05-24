import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Conversas extends Component {
	componentWillMount() {
		this.props.actions.conversasUsuarioFetch();
		this.criaFonteDeDados(this.props.conversas);
	}

	componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.conversas);
	}

	criaFonteDeDados(conversas) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.fonteDeDados = ds.cloneWithRows(conversas)
	}

	renderRow(conversa) {
		return (
			<View style={styles.viewPrincipal}>
				<TouchableOpacity
					onPress={() => Actions.formConversa({ title: conversa.nome, contatoNome: conversa.nome, contatoEmail: conversa.email })}
				>
					<Text style={styles.textNome}> {conversa.nome} </Text>
				</TouchableOpacity>
			</View>
		)
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.fonteDeDados}
				renderRow={this.renderRow}
			/>
		)
	}
}

const mapStateToProps = state => {
	const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
		return { ...val, uid }
	});
	return {
		conversas
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});


const styles = StyleSheet.create({
	viewPrincipal: {
		flex: 1,
		borderColor: '#CCC',
		borderBottomWidth: 1,
		padding: 10
	},
	textNome: {
		fontSize: 22,
		paddingTop: 4,
		paddingBottom: 4,
		paddingHorizontal: 5,
		fontWeight: '400'
	},
	textMensagem: {
		fontSize: 16,
		paddingTop: 1,
		paddingBottom: 5,
		paddingHorizontal: 5
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversas);

