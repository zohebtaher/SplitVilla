import * as APIUtil from "../utils/friendship_util";

export const ACCEPT_FRIENDSHIP = "ACCEPT_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_USER_FRIENDSHIPS";
export const CLEAR_FRIENDSHIPS = "CLEAR_FRIENDSHIPS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS";
export const CLEAR_FRIENDSHIP_ERRORS = "CLEAR_FRIENDSHIP_ERRORS";

// action creators
const createFriendship = (friendship) => ({
  type: ACCEPT_FRIENDSHIP,
  friendship,
});

const receiveUsersFriendships = (friendships) => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  friendships,
});

const removeFriendship = (friendshipId) => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId,
});

const receiveFriendshipErrors = (errors) => ({
  type: RECEIVE_FRIENDSHIP_ERRORS,
  errors,
});

export const clearFriendships = () => ({
  type: CLEAR_FRIENDSHIPS,
});

export const clearFriendshipErrors = () => ({
  type: CLEAR_FRIENDSHIP_ERRORS,
});

//thunk action creators

export const postFriendship = (user_id, friend_id) => (dispatch) =>
  APIUtil.acceptFriendship(user_id, friend_id).then(
    (friendship) => dispatch(createFriendship(friendship)),
    (err) => dispatch(receiveFriendshipErrors(err.responseJSON))
  );

export const fetchFriendships = (userId) => (dispatch) =>
  APIUtil.fetchFriendships(userId).then(
    (friendships) => dispatch(receiveUsersFriendships(friendships)),
    (err) => dispatch(receiveFriendshipErrors(err.responseJSON))
  );

export const deleteFriendship = (friendshipId) => (dispatch) =>
  APIUtil.deleteFriendship(friendshipId).then(
    () => dispatch(removeFriendship(friendshipId)),
    (err) => dispatch(receiveFriendshipErrors(err.responseJSON))
  );
