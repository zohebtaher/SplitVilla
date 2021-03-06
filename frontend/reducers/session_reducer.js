import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const nullSession = {
  id: null,
};

export default (state = nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, { id: null });
    default:
      return state;
  }
};
