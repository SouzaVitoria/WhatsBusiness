import { lISTA_CONTATO_USER } from '../actions/Types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case lISTA_CONTATO_USER:
      return action.payload;
    default:
      return state;
  }
}