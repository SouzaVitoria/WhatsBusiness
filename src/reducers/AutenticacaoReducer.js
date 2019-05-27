import {
  MODIFICA_EMAIL,
  MODIFICA_PASSWORD,
  MODIFICA_NAME,
  CADASTRO_USER_SUCCESS,
  CADASTRO_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO
} from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registerError: '',
  loadingLogin: false,
  loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload }
    case MODIFICA_PASSWORD:
      return { ...state, password: action.payload }
    case MODIFICA_NAME:
      return { ...state, name: action.payload }
    case CADASTRO_USER_SUCCESS:
      return { ...state, name: '', password: '' }
    case CADASTRO_USER_ERROR:
      return { ...state, registerError: action.payload, loadingCadastro: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE}
    case LOGIN_USER_ERROR:
      return { ...state, registerError: action.payload, loadingLogin: false }
    case LOGIN_EM_ANDAMENTO:
      return { ...state, loadingLogin: true }
    case CADASTRO_EM_ANDAMENTO:
      return { ...state, loadingCadastro: true }
    default:
      return state;
  }
}