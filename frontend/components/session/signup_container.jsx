import { connect } from 'react-redux';
import { createNewUser, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup'

const mapStatetoProps = ({errors}) => ({
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    removeErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Signup);

