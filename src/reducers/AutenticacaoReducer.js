import {
  MODIFICA_EMAIL,
  MODIFICA_PASSWORD,
  MODIFICA_NAME,
  CADASTRO_USER_SUCCESS,
  CADASTRO_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from '../actions/Types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  registerError: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)

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
      return { ...state, registerError: action.payload }
    case LOGIN_USER_SUCCESS:
      return { ...state, name: '', password: '' }
    case LOGIN_USER_ERROR:
      return { ...state, registerError: action.payload }
    default:
      return state;
  }
}