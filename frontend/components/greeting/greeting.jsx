import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className='greetingbar'>
      <Link to='/'>Splitvilla</Link>
      <div className="greeting-right">
        <ul>
          <li><Link className='login-button' to="/login">Login</Link></li>
          
          <li><Link className='green-button' to="/signup">Sign up!</Link></li>
        </ul>
      </div>
    </div>
  );
  const personalGreeting = () => (
      <div className='greetingbar-personal'>
        <ul>
        <li><Link to='/'>Splitvilla</Link></li>
        <li><Link to ='/'><img height="30px" src={window.logo} /></Link></li>
        </ul>
        <div className="greeting-right">
          <ul>
          <li><p>Hello {currentUser.username}!</p></li>
          <li><button className="green-button" onClick={logout}>Log Out</button></li>
          </ul>
        </div>
      </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;