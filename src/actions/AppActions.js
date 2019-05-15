import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO } from '../actions/Types';
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
     console.log(dadosUser)

     let emailUsuarioB64 = b64.encode(email)

     console.log('email::::' + emailUsuarioB64)
     firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
      .push({ email, name: dadosUser.name })
      .then(() => console.log('Sucesso'))
      .catch(erro => console.log(erro))

     //email do usuario autenticado
     console.log(firebase.auth().currentUser.email);

    } else {
     dispatch({
      type: ADICIONA_CONTATO_ERRO,
      payload: 'Nenhum usuário com este e-mail. Tente Novamente!'
     });
    // return{ type: ''}
    }
   })
 }
}