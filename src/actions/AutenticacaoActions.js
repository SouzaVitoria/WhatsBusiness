import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaEmail = textEmail => {
  return {
    type: 'modifica_email',
    payload: textEmail
  }
}

export const modificaPassword = textPassword => {
  return {
    type: 'modifica_password',
    payload: textPassword
  }
}

export const modificaName = textName => {
  return {
    type: 'modifica_name',
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
  dispatch({ type: 'cadastro_user_success' });
  Actions.formBoasVindas();
}

const cadastroUserError = (erro, dispatch) => {
  dispatch({ type: 'cadastro_user_error', payload: erro.message });
}

export const autenticarUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(value => {
        dispatch({
          type: 'login_user_success'
        })
      })
      .catch(erro => {
        erro,
          dispatch({
            type: 'login_user_erro',
            payload: erro.message
          })
      });
  }
}