import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  lISTA_CONTATO_USER,
  MODIFICA_MENSAGEM
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
        //console.log(snapshot.val());
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
  console.log("Email do usuario logado--> ", currentUser.email)
  console.log("Contato do email --> ", contatoEmail)

  return dispatch => {
    const usuarioEmailB64 = b64.encode(currentUser.email);
    const contatoEmailB64 = b64.encode(contatoEmail);

    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
      .push({ mensagem, tipo: 'enviado' })
      .then(() => {
        firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
          .push({ mensagem, tipo: 'recebido' })
          .then(() => dispatch({ type: 'xyz' }))
      })
      .then(() => {
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
          .set({ nome: contatoNome, email: contatoEmail })
          .then(() => {

            firebase.database().ref(`/contatos/${usuarioEmailB64}`)
              .once("value")
              .then(snapshot => {
                const dadosUsuario = _.first(_.values(snapshot.val()));

                console.log('Vendo como esta ---> ', dadosUsuario)

                firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                  .set({ nome: dadosUsuario.name, email: usuarioEmail })
              })


          })
      })

  }
}