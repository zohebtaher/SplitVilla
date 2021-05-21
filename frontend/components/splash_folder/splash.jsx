import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-top">
          <div className="main-top-left">
            <h1> Less Stress when sharing expenses with anyone</h1>
            <h3>
              Keep track of your shared expenses and balances with
              housemates,friends and family{" "}
            </h3>
            <Link className="splash-signup" to="/signup">
              <button>Sign up!</button>
            </Link>
            <div className="my-info-links">
              <a
                href="https://www.linkedin.com/in/mohammad-taher-2b502b5b"
                target="_blank"
              >
                <FontAwesomeIcon className="info-links" icon={faLinkedin} />
              </a>
              <a href="https://github.com/zohebtaher" target="_blank">
                <FontAwesomeIcon className="info-links" icon={faGithubSquare} />
              </a>
            </div>
          </div>
          <img src={window.credit} alt="credit cards" />
        </div>

        <ul className="visuals-body">
          <li className="black-splash">
            <h1>Track Balances</h1>
            <p>Keep track of shared expenses, balances and who owes who</p>
            <img src={window.splash1} alt="splash image" />
          </li>
          <li className="green-splash">
            <h1>Organize expenses</h1>
            <p>
              Split expenses with any group: trips, housemates, friends, and
              family
            </p>
            <img src={window.splash2} alt="splash image" />
          </li>
          <li className="orange-splash">
            <h1>Add expenses easily</h1>
            <p>Quickly add expenses on the go before you forget who paid</p>
            <img src={window.splash3} alt="splash image" />
          </li>
          <li className="brown-splash">
            <h1>Pay friends back</h1>
            <p>Settle up with a friend and record any cash or online payment</p>
            <img src={window.splash4} alt="splash image" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Splash;
