import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {
	_renderBtnSalvar() {
		if (this.props.loadingAdicionaContato) {
			return (
				<View style={styles.loading}>
					<ActivityIndicator size="large" />
				</View>
			)
		} else {
			return (
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
				>
					<Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Salvar </Text>
				</TouchableOpacity>
			)
		}
	}

	_renderAdicionarContato() {
		if (!this.props.cadastro_resultado_inclusao) {
			return (
				<View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
					<TextInput
						style={styles.input}
						placeholder='E-mail'
						value={this.props.adiciona_contato_email.toLowerCase()}
						onChangeText={textoModificaAdicionaContato => this.props.modificaAdicionaContatoEmail(textoModificaAdicionaContato)}
					/>
					<View>
						{this._renderBtnSalvar()}
						<Text style={{ color: '#FF0000', fontSize: 18, marginHorizontal: 30, marginVertical: 10 }}> {this.props.cadastro_resultado_txt_erro} </Text>
					</View>
				</View>

			)
		} else {
			return (
				<View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }}>
					<Text style={{ color: '#FF0000', fontSize: 18, marginHorizontal: 30, marginVertical: 10 }}> Contato adicionado com sucesso! </Text>
				</View>
			)
		}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center' }} >
				{this._renderAdicionarContato()}
			</View>
		)
	}
}

const mapStateToProps = state => (
	{
		adiciona_contato_email: state.AppReducer.adiciona_contato_email,
		cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
		cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao,
		loadingAdicionaContato: state.AppReducer.loadingAdicionaContato
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
		marginTop: 40,
		marginHorizontal: 40
	},
	loading: {
		padding: 10,
		margin: 40
	}
})

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);