import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="greetingbar">
      <Link to="/">Splitvilla</Link>
      <ul className="greeting-right">
        <li>
          <Link className="login-button" to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link className="signup-button" to="/signup">
            Sign up!
          </Link>
        </li>
      </ul>
    </div>
  );
  const personalGreeting = () => (
    <div className="greetingbar-personal">
      <ul className="top-dashboard-right">
        <li className="splitvilla-dashboard">Splitvilla</li>
        <li>
          <Link to="/">
            <img height="26px" src={window.logo} />
          </Link>
        </li>
      </ul>
      <div className="greeting-right">
        <ul>
          <li>
            <p className="hello">Hello {currentUser.username}!</p>
          </li>

          <li>
            <button className="green-button" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
