const INITIAL_STATE = {
 name: '',
 email: '',
 password: '',
 registerError: ''
}

export default (state = INITIAL_STATE, action) => {
 console.log(action)
 if (action.type == 'modifica_email') {
  return { ...state, email: action.payload }
 }
 if (action.type == 'modifica_password') {
  return { ...state, password: action.payload }
 }
 if (action.type == 'modifica_name') {
  return { ...state, name: action.payload }
 }
 if (action.type == 'cadastro_user_error') {
  return { ...state, registerError: action.payload }
 }
 return state;
}