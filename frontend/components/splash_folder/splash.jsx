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
        <div className="footer">
          <div className="footer-description">
            <h1> Splitvilla is a clone of Splitwise</h1>
            <h4> This site is intended for demonstration only</h4>
            <a
              href="https://www.linkedin.com/in/mohammad-taher-2b502b5b"
              target="_blank"
            >
              <FontAwesomeIcon
                className="footer-info-links"
                icon={faLinkedin}
              />
            </a>
            <a href="https://github.com/zohebtaher" target="_blank">
              <FontAwesomeIcon
                className="footer-info-links"
                icon={faGithubSquare}
              />
            </a>
          </div>

          <ul className="footer-about">
            <h3>About the engineer:</h3>
            <li>
              Mohammad Taher is a fullstack software engineer based in Toronto
            </li>
            <li>BS: Medical Radiation Science, University of Toronto , 2011</li>
            <li>Graduate of App Academy- New York, 2021</li>
          </ul>
          <ul className="footer-skills">
            <h3>Skills</h3>
            <li> React/Redux</li>
            <li>JavaScript</li>
            <li>PostgresSQL</li>
            <li>Ruby on Rails</li>
            <li>Ruby</li>
            <li>HTML5</li>
            <li>CSS</li>
          </ul>
          <ul clasName="footer-projects">
            <h3>Projects</h3>
            <li>
              <Link to="/">SplitVilla</Link>
            </li>
            <li>
              <a
                href="http://netzero-application.herokuapp.com/#/"
                target="_blank"
              >
                NETZERO
              </a>
            </li>
            <li>
              <a href="https://zohebtaher.github.io/AbcTrace/" target="_blank">
                Tracing Fun
              </a>
            </li>
          </ul>
          <ul className="footer-contact">
            <h3>Contact</h3>
            <li>Mohammad Taher</li>
            <li>
              <a href="mailto:zohebtaher@gmail.com?subject=Hey! I saw your Splitvilla app.">
                zohebtaher@gmail.com
              </a>
            </li>
            <li>
              <a href="https://zohebtaher.github.io/portfolio/" target="_blank">
                Personal Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Splash;
