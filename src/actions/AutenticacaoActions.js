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
  LOGIN_USER_ERROR
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

export const modificaName = textName => {
  return {
    type: MODIFICA_NAME,
    payload: textName
  }
}

export const cadastraUser = ({ name, email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
          .push({ name })
          .then(value => cadastroUserSuccess(dispatch));
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
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        dispatch({
          type: LOGIN_USER_SUCCESS
        });
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