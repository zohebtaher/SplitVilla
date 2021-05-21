import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { logOutUser } from "../../actions/session_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    logOutUser: () => dispatch(logOutUser()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(Dashboard);
