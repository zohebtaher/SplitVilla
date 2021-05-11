import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logOutUser}) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logOutUser}>Log out</button>
        </div>
    ) : (
        <div>
            <ul>
            <li><Link to='/login'>Log In</Link></li>
            <br/>
            <li><Link to='/signup'>Sign Up</Link></li>
            </ul>

        </div>
    )

    return (
        <div>
            <header className='nav-bar'>
                <Link to='/'>SplitVilla</Link>
                {display}
            </header>
        </div>
    )
}


