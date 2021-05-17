import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logOutUser } from '../../actions/session_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        logOutUser: () =>dispatch(logOutUser()),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
}

export default connect(mSTP, mDTP)(NavBar)