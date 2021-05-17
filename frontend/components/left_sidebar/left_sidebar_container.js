import { connect } from 'react-redux';
import LeftSideBar from './left_sidebar';
import { openModal } from '../../actions/modal_actions';
import {  fetchAllUsers } from '../../actions/user_actions';


const mSTP = state => {
    return {
        state
    }
}

const mDTP= dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchAllUsers: () => dispatch(fetchAllUsers())

    }
}

export default connect(mSTP, mDTP)(LeftSideBar);
