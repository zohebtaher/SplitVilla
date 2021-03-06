import React from "react";
import ReactDOM from "react-dom";
import { signUp, logIn, logOut, fetchUsers } from "./utils/session_api_util";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.user.id },
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  // window.logIn = logIn;
  // window.signUp = signUp;
  // window.logOut = logOut;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = fetchUsers;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
