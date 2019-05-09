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