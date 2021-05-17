import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return  {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);