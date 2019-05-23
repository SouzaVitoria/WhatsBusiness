import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/AppActions';

class Conversa extends Component {

	componentWillMount() {
		this.props.actions.conversaUsuarioFetch(this.props.contatoEmail);
		this.criaFonteDeDados(this.props.conversa);
	}

	componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.conversa);
	}


	_enviaMensagem() {
		const { mensagem, contatoNome, contatoEmail } = this.props;
		this.props.actions.enviarMensagem(mensagem, contatoNome, contatoEmail)
	}

	criaFonteDeDados(conversa) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.dataSource = ds.cloneWithRows(conversa)
	}

	renderRow(texto) {
		if (texto.tipo == "recebido") {
			return (
				<View style={styles.viewMensagemEnviada}>
					<Text style={styles.mensagemEnviada}> {texto.mensagem}</Text>
				</View>
			)
		}
		return (
			<View style={styles.viewMensagemRecebida} >
				<Text style={styles.mensagemRecebida}> {texto.mensagem}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.viewPrincipal}>
				<View style={{ flex: 1, marginBottom: 20 }}>
					<ListView
						enableEmptySections
						dataSource={this.dataSource}
						renderRow={this.renderRow}
					/>
				</View>
				<View style={styles.viewInputImage}>
					<TextInput
						style={styles.input}
						placeholder='Write here'
						placeholderTextColor='#000'
						value={this.props.mensagem}
						onChangeText={texto => this.props.actions.modificaMensagem(texto)}
					/>
					<TouchableOpacity
						style={styles.image}
						onPress={this._enviaMensagem.bind(this)}
					>
						<Image source={require('../imgs/enviar_mensagem.png')} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	viewPrincipal: {
		backgroundColor: '#EEE4DC',
		flex: 1,
		padding: 10,
	},
	viewInputImage: {
		flexDirection: 'row',
		height: 60
	},
	image: {
		marginLeft: 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderColor: '#000',
		paddingTop: 1,
		borderRadius: 4,
		color: '#000',
		flex: 4,
		backgroundColor: '#FFF'
	},
	viewMensagemEnviada: {
		alignItems: 'flex-start',
		marginVertical: 5,
		marginRight: 40
	},
	viewMensagemRecebida: {
		alignItems: 'flex-end',
		marginVertical: 5,
		marginLeft: 40
	},
	mensagemRecebida: {
		fontSize: 18,
		color: '#000',
		padding: 10,
		backgroundColor: '#DBF5B4',
		elevation: 1
	},
	mensagemEnviada: {
		fontSize: 18,
		color: '#000',
		padding: 10,
		backgroundColor: '#F7F7F7',
		elevation: 1
	}
});

mapStateToProps = state => {
	const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
		return { ...val, uid };
	});

	return ({
		mensagem: state.AppReducer.mensagem,
		conversa
	})
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversa);