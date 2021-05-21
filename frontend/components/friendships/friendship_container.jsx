import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import FriendsIndex from "./friendship_index";
import { fetchFriendships } from "../../actions/friendship_actions";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    friendships: Object.values(state.entities.friendships),
    currentUserId: state.session.id,
  };
};

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  fetchFriendships: (userId) => dispatch(fetchFriendships(userId)),
});

export default connect(mSTP, mDTP)(FriendsIndex);
