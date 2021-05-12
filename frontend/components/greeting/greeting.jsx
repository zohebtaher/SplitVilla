import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className='greetingbar'>
      <Link to='/'>Splitvilla</Link>
      <div className="greeting-right">
        <ul>
          <li><Link className='login-button' to="/login">Login</Link></li>
          <p>or</p>
          <li><Link className='green-button' to="/signup">Sign up!</Link></li>
        </ul>
      </div>
    </div>
  );
  const personalGreeting = () => (
      <div className='greetingbar'>
        <Link to='/'>Splitvilla</Link>
        <div className="greeting-right">
          <p>Hello {currentUser.username}!</p>
          <button className="green-button" onClick={logout}>Log Out</button>
        </div>
      </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;