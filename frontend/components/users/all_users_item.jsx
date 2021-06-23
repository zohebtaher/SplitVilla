import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postFriendRequest,
  deleteFriendRequest,
} from "../../actions/request_actions";
import {
  fetchFriendships,
  postFriendship,
  clearFriendships,
} from "../../actions/friendship_actions";
import { fetchTheUser, getCurrentUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";

export default (props) => {
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );
  const currentUserId = useSelector((state) => state.session.id);
  const otherUser = props.user;

  const dispatch = useDispatch();

  const handleRequest = () => {
    dispatch(postFriendRequest(currentUserId, otherUser.id));
    setTimeout(() => {
      dispatch(closeModal());
      dispatch(fetchFriendships(currentUserId));
      dispatch(getCurrentUser(currentUserId));
    }, 1000);
  };

  // useEffect(()=>{
  // dispatch(fetchFriendships(currentUserId));

  // },[]);

  if (
    currentUser.requestsAsReceiver &&
    currentUser.requestsAsReceiver.some(
      (req) => req.requestor_id === otherUser.id
    )
  ) {
    // debugger
    const request = currentUser.requestsAsReceiver.filter((req) => {
      if (req.requestor_id === otherUser.id) {
        return req;
      }
    });
    return (
      <li className="add-friend-flex">
        {otherUser.username}
        <div className="button-spacing">
          <button
            className="edit-profile-button"
            onClick={() => {
              dispatch(postFriendship(currentUserId, otherUser.id));
              setTimeout(() => {
                dispatch(closeModal());
                dispatch(fetchFriendships(currentUserId));
                dispatch(getCurrentUser(currentUserId));
              }, 1000);
            }}
          >
            Accept Request
          </button>
          <button
            className="edit-profile-button"
            onClick={() => {
              dispatch(deleteFriendRequest(request[0].id));
              setTimeout(() => {
                dispatch(closeModal());
                dispatch(fetchFriendships(currentUserId));
                dispatch(getCurrentUser(currentUserId));
              }, 1000);
            }}
          >
            Reject Request
          </button>
        </div>
      </li>
    );
  } else if (
    currentUser.friendships.length > 0 &&
    currentUser.friendships.some((ele) => ele.friend_id === otherUser.id)
  ) {
    // debugger
    const friendship = currentUser.friendships.filter((ship) => {
      if (ship.friendId === otherUser.id) {
        return ship;
      }
    });
    return (
      <li className="add-friend-flex">
        {otherUser.username}
        <p
          className="edit-profile-button-friend-button"
          onClick={() => dispatch(closeModal())}
        >
          Friend
        </p>
      </li>
    );
  } else if (
    otherUser.requestsAsReceiver &&
    otherUser.requestsAsReceiver.some(
      (user) => user.requestor_id === currentUserId
    )
  ) {
    // if (this.props.currentUser.requestsSent)
    const request = otherUser.requestsAsReceiver.filter((req) => {
      if (req.requestor_id === currentUserId) return req;
    });

    return (
      <li className="add-friend-flex">
        {otherUser.username}
        <p
          className="edit-profile-button-friend-button"
          onClick={() => dispatch(closeModal())}
        >
          Requested
        </p>
            
          
        
      </li>
    );
  } else {
    return (
      <li className="add-friend-flex">
        {otherUser.username}
        <button className="edit-profile-button" onClick={handleRequest}>
          Add Friend
        </button>
      </li>
    );
  }
};
