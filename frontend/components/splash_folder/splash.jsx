import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
    render (){
        return (
        <div className ='main'>
            <div className ='main-left'>
                <h1> Less Stress when sharing expenses with anyone</h1>
                <Link className='green-button' to="/signup">Sign up!</Link>
                <h3>Keep track of your shared expenses and balances with housemates,friends and family </h3>
            </div>
            <div className ='main-right'>
                <img src={window.credit} alt="credit cards" />
            </div>
        
        
        </div>
        )
    }
}

export default Splash;