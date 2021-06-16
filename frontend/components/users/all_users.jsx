import React from "react";
import AllUsersItem from "./all_users_item";

export default class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  // componentWillUnmount() {
  //     this.props.clearUsers();
  // }

  render() {
    const users = this.props.allUsers.map((user) => {
      if (user.id !== this.props.currentUserId) {
        return <AllUsersItem key={user.id} user={user} />;
      }
    });

    return (
      <div className="addfriend-box">
        <ul>{users}</ul>
      </div>
    );
  }
}
