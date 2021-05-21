import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      let newState = Object.assign(
        {},
        { formName: action.formName, objectId: action.objectId }
      );
      return newState;
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;
