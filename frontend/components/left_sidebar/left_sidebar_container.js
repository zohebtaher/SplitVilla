import { connect } from "react-redux";
import LeftSideBar from "./left_sidebar";
import { openModal } from "../../actions/modal_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import {
  fetchFriendships,
  clearFriendships,
} from "../../actions/friendship_actions";
import { getAllBills } from "../../actions/bill_action";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
    clearFriendships: () => dispatch(clearFriendships()),
    getAllBills: () => dispatch(getAllBills()),
  };
};

export default connect(mSTP, mDTP)(LeftSideBar);
