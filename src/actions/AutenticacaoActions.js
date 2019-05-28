import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
	MODIFICA_EMAIL,
	MODIFICA_PASSWORD,
	MODIFICA_NAME,
	CADASTRO_USER_SUCCESS,
	CADASTRO_USER_ERROR,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGIN_EM_ANDAMENTO,
	CADASTRO_EM_ANDAMENTO,
	MODIFICA_USER
} from './Types';

export const modificaEmail = textEmail => {
	return {
		type: MODIFICA_EMAIL,
		payload: textEmail
	}
}

export const modificaPassword = textPassword => {
	return {
		type: MODIFICA_PASSWORD,
		payload: textPassword
	}
}

export const modificaUser = textUser => {
//	console.log("Action => ", textUser);
	return {
		type: MODIFICA_USER,
		payload: textUser,
		email: ''
	}
}

export const modificaName = textName => {
	return {
		type: MODIFICA_NAME,
		payload: textName
	}
}

export const cadastraUser = ({ name, email, password, user }) => {
	return dispatch => {
		dispatch({ type: CADASTRO_EM_ANDAMENTO });

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				let emailB64 = b64.encode(email);
				firebase.database().ref(`/contatos/${emailB64}`)
					.push({ name, user })
					.then(() => cadastroUserSuccess(dispatch));
			})
			.catch(erro => cadastroUserError(erro, dispatch));
	}
}

const cadastroUserSuccess = dispatch => {
	dispatch({ type: CADASTRO_USER_SUCCESS });
	Actions.formBoasVindas();
}

const cadastroUserError = (erro, dispatch) => {
	dispatch({ type: CADASTRO_USER_ERROR, payload: erro.message });
}

export const autenticarUser = ({ email, password }) => {
	return dispatch => {
		dispatch({ type: LOGIN_EM_ANDAMENTO });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({ type: LOGIN_USER_SUCCESS });
				Actions.formPrincipal();
			})
			.catch(erro => {
				erro,
					dispatch({
						type: LOGIN_USER_ERROR,
						payload: erro.message
					})
			});
	}
}