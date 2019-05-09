import firebase from 'firebase';

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
   .then(user => cadastroUserSuccess(dispatch))
   .catch(erro => cadastroUserError(erro, dispatch));
 }

}

const cadastroUserSuccess = dispatch => {
 dispatch({ type: 'sucesso' })
}

const cadastroUserError = (erro, dispatch) => {
 dispatch({ type: 'cadastro_user_error', payload: erro.message })
}