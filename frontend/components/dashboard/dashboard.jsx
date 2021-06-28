import React from "react";
import { Switch, withRouter, Link, Route } from "react-router-dom";
import { ProtectedRoute } from "../../utils/routes_util";
import LeftSidebar from "../left_sidebar/left_sidebar_container";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BillIndexContainer from "../bills/bill_index_container";
import { RightSidebar } from "../right_sidebar";
import DashTop from "./dash_top";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="main-center">
          <section className="dashtop">
            <DashTop />
          </section>
          <section className="all-expenses">
            <BillIndexContainer />
          </section>
        </div>
        <section className="right-sidebar">
          <RightSidebar />
        </section>
      </div>
    );
  }
}

export default Dashboard;
