import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handlesubmit = this.handlesubmit.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  displayErrors() {
    return (
      <div className="login-errors">
        <h3>
          Whoops! We couldn’t find an account for that email address and
          password. Maybe you’ve forgotten your password?
        </h3>
        <button onClick={() => this.props.clearErrors()}>x</button>
      </div>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: "demo@demo.com", password: "password" };
    this.props.login(demoUser);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handlesubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <div className="login-box">
        <div className="login-form-container">
          <Link to="/" className="login-logo">
            <img src={window.logo} />
          </Link>
          {this.props.errors.length === 0 ? null : (
            <div>{this.displayErrors()}</div>
          )}
          <div className="login-form">
            <h1>Log in</h1>
            <br />
            <br />

            <form onSubmit={this.handlesubmit}>
              <label>
                <h2>Email address:</h2>
              </label>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
              <br />

              <br />
              <label>
                <h2>Password:</h2>
              </label>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              <br />
              <br />
              <div className="login-options">
                <button className="orange-button" type="submit">
                  Log in
                </button>
                <p className="or">or</p>
                <button onClick={this.demoLogin}>Demo User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
