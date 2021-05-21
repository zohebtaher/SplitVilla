import React from "react";
import { Link } from "react-router-dom";

const FriendIndexItem = (props) => {
  return <li>{props.friend.userName}</li>;
};

export default FriendIndexItem;

// export default (props) => {
//   const handleClick = () => {
//     // props.history.push(`/users/${props.friendship.friendId}`);
//   };

//   return (
//     <li className="friendship-card" onClick={handleClick}>
//       {/* <img
//         src={props.friendship.profilePhoto}
//         alt=""
//         className="friendship-card-image"
//       /> */}
//       <a className="user-friend-link">{props.friendship.username}</a>
//     </li>
//   );
// };
