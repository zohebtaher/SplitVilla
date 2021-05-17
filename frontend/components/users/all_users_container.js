import { connect } from 'react-redux';
import AllUsers from './all_users';
import { fetchAllUsers, clearAllUsers } from '../../actions/user_actions';
import { postFriendRequest } from '../../actions/request_actions'

const mSTP = state => {
    return {
        currentUser: state.entities.users,
        allUsers: Object.values(state.entities.allUsers),
        currentUserId: state.session.id
    }
}


const mDTP = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        clearUsers: () => dispatch(clearAllUsers())
    }
}

export default connect(mSTP, mDTP)(AllUsers);