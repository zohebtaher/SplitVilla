import {
  RECEIVE_BILLS,
  REMOVE_BILL,
  RECEIVE_BILL,
} from "../actions/bill_action";
import { RECEIVE_CURRENT_USER} from "../actions/user_actions";
import { LOGOUT_CURRENT_USER }  from "../actions/session_actions"
import { CLOSE_MODAL } from "../actions/modal_actions"
const billsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BILLS:
      return Object.assign({}, state, action.bills);
    case CLOSE_MODAL:
      return Object.assign({}, state, action.bills);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.bills);
    case RECEIVE_BILL:
      return Object.assign({}, state, action.bill);
    case REMOVE_BILL:
      let newState = Object.assign({}, state);
      delete newState[action.bill.id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default billsReducer;
