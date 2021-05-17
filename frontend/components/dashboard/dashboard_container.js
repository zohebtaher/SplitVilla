import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({


})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})

export default connect (mSTP, mDTP)(Dashboard)
