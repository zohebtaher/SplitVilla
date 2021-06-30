import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import AllUsersReducer from "./all_users_reducer";
import requestReducer from "./request_reducer";
import friendshipReducer from "./friendship_reducer";
import billsReducer from "./bills_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  allUsers: AllUsersReducer,
  requests: requestReducer,
  friendships: friendshipReducer,
  bills: billsReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
