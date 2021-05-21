import React from "react";
import SignupContainer from "./session/signup_container";

import LoginFormContainer from "./session/login_form_container";
import { AuthRoute, ProtectedRoute } from "../utils/routes_util";
import { Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import Splash from "./splash_folder/splash";
import ModalContainer from "./modal/modal_container";
import DashboardContainer from "./dashboard/dashboard_container";

const App = () => (
  <div className="main-div">
    {/* <h1>This is from APP</h1> */}
    <header>
      <ModalContainer />
      <GreetingContainer />
    </header>
    <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <ProtectedRoute  exact path="/dashboard" component={DashboardContainer} />
    <ProtectedRoute path='/all' component={DashboardContainer} />
    </Switch>
  </div>
);

export default App;
