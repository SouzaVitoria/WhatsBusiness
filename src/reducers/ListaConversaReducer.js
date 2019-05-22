import { LISTA_CONVERSA_USUARIO } from '../actions/Types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
   // console.log("ACTION -> ", action.payload)
    switch (action.payload) {
        case LISTA_CONVERSA_USUARIO:
            return action.payload
        default:
            return state;
    }
}