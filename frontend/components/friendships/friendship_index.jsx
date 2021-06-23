import React from "react";
import FriendIndexItem from "./friendship_index_item";

class FriendsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships(this.props.currentUserId);
  }

  render() {
    // debugger;
    const friends = this.props.friendships;
    // debugger;
    return (
      <div className="my-friends-container">
        <h1 className="myfriends">My Friends</h1>
        <ul className="friends-Index">
          {this.props.friendships.map((friend) => {
            // debugger;
            return <FriendIndexItem key={friend.id} friend={friend} />;
          })}
        </ul>
      </div>
    );
  }
}

export default FriendsIndex;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import FriendshipItem from "./friendship_index_item";
// import {
//   clearFriendships,
//   fetchFriendships,
// } from "../../actions/friendship_actions";

// export default (props) => {
//   const currentUser = useSelector(
//     (state) => state.entities.users[state.session.id]
//   );
//   const friendships = useSelector((state) =>
//     Object.values(state.entities.friendships)
//   );
//   const currentUserId = useSelector((state) => state.session.id);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchFriendships(currentUser.id));
//     return () => {
//       dispatch(clearFriendships());
//     };
//   }, []);

//   if (!friendships) return "";

//   return (
//     <div>
//       <ul className="friends-list">
//         {friendships.map((friendship) => {
//           return (
//             <FriendshipItem
//               key={friendship.id}
//               friendship={friendship}
//               // history={props.history}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
