import {
	MODIFICA_ADICIONA_CONTATO_EMAIL,
	ADICIONA_CONTATO_ERRO,
	ADICIONA_CONTATO_SUCESSO,
	lISTA_CONTATO_USER,
	MODIFICA_MENSAGEM,
	LISTA_CONVERSA_USUARIO,
	ENVIA_MENSAGEM_SUCESSO,
	LISTA_CONVERSAS_USUARIO
} from '../actions/Types';
import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

export const modificaAdicionaContatoEmail = textoModificaAdicionaContatoEmail => {
	return {
		type: MODIFICA_ADICIONA_CONTATO_EMAIL,
		payload: textoModificaAdicionaContatoEmail
	}
}

export const adicionaContato = email => {
	return dispatch => {

		let emailB64 = b64.encode(email);

		firebase.database().ref(`/contatos/${emailB64}`)
			.once('value')
			.then(snapshot => {
				if (snapshot.val()) {
					const dadosUser = _.first(_.values(snapshot.val()));

					const { currentUser } = firebase.auth();
					let emailUsuarioB64 = b64.encode(currentUser.email);

					firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
						.push({ email, name: dadosUser.name })
						.then(() => adicionaContatoSucesso(dispatch))
						.catch(erro => adicionaContatoErro(erro.message, dispatch))
				} else {
					//if(snapshot.val() == ){
						dispatch({
							type: ADICIONA_CONTATO_ERRO,
							payload: 'Esse usuário já esta na sua lista de contatos!'
						});
					//}
					dispatch({
						type: ADICIONA_CONTATO_ERRO,
						payload: 'Nenhum usuário com este e-mail. Tente Novamente!'
					});
				}
			})
	}
}

const adicionaContatoErro = (erro, dispatch) => (
	dispatch({
		type: ADICIONA_CONTATO_ERRO,
		payload: 'Nenhum usuário com este e-mail. Tente Novamente!'
	})
)

const adicionaContatoSucesso = dispatch => (
	dispatch({ type: ADICIONA_CONTATO_SUCESSO, payload: true })
)

export const habilitaInclusaoContato = () => ({
	type: ADICIONA_CONTATO_SUCESSO,
	payload: false
})

export const contatosUsersFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		let emailUsuarioB64 = b64.encode(currentUser.email);
		firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
			.on('value', snapshot => {
				dispatch({ type: lISTA_CONTATO_USER, payload: snapshot.val() })
			})
	}
}

export const modificaMensagem = texto => {
	return ({
		type: MODIFICA_MENSAGEM,
		payload: texto
	})
}

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		const usuarioEmailB64 = b64.encode(currentUser.email);
		const contatoEmailB64 = b64.encode(contatoEmail);

		firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
			.push({ mensagem, tipo: 'enviado' })
			.then(() => {
				firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
					.push({ mensagem, tipo: 'recebido' })
					.then(() => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }))
			})
			.then(() => {
				firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
					.set({ nome: contatoNome, email: contatoEmail })
					.then(() => {

						firebase.database().ref(`/contatos/${usuarioEmailB64}`)
							.once("value")
							.then(snapshot => {
								const dadosUsuario = _.first(_.values(snapshot.val()));
								firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
									.set({ nome: dadosUsuario.name, email: usuarioEmail })
							})
					})
			})
	}
}

export const conversaUsuarioFetch = contatoEmail => {
	const { currentUser } = firebase.auth();
	let contatoEmailB64 = b64.encode(contatoEmail);
	let usuarioEmailB64 = b64.encode(currentUser.email);

	return dispatch => {
		firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
			.on("value", snapshot => {
				dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
			})
	}
}

export const conversasUsuarioFetch = () => {
	const { currentUser } = firebase.auth();

	return dispatch => {
		let usuarioEmailB64 = b64.encode(currentUser.email);

		firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}`)
			.on("value", snapshot => {
				dispatch({ type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val() })
			})
	}
}