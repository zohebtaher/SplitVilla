import { connect } from 'react-redux';

import { logOut } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);