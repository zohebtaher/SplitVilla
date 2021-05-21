import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Friendship from "../friendships/friendship_container";
import { Switch, Route, Link } from "react-router-dom";
import BillIndexContainer from "../bills/bill_index_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ui: { modal: null },
    };
  }

  componentDidMount() {
    this.props.fetchFriendships(this.props.currentUserId);
  }

  // componentWillUnmount() {
  //   this.props.clearFriendships();
  // }

  render() {
    // const currentUser= this.props.currentUser
    // const currentUserId = this.propsCurrentUserId
    // const friendships = this.props.fetchFriendships(this.props.currentUserId);

    return (
      <div className="leftbar-nav">
        <div className="leftbar-top">
          <span> ADD/ACCEPT FRIENDS</span>
          <a id="accept-add-link"
            onClick={() => this.props.openModal("addFriend")}
          >
            <i className="fas fa-plus fa-sm"></i>add
          </a>
        </div>
        <div className="dashboard-links">
            <a
              href="https://www.linkedin.com/in/mohammad-taher-2b502b5b"
              target="_blank"
            >
              <FontAwesomeIcon className="dash-links" icon={faLinkedin} />
            </a>
            <a href="https://github.com/zohebtaher" target="_blank">
              <FontAwesomeIcon className="dash-links" icon={faGithubSquare} />
            </a>
          </div>
        <div className="friend Index">
          <Friendship />
        </div>
       
      </div>
    );
  }
}

export default withRouter(LeftSidebar);
