import { connect } from 'react-redux';

import { logOutUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);