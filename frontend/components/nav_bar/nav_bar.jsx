import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/routes_util';
import LeftSidebar from '../left_sidebar/left_sidebar_container';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className ="nav-bar-container">
                {/* <header className= "nav-bar">
                    <div className='top-nav-div'>
                        <span className="nav-styled-name">SplitVilla</span>
                        <span onClick={this.props.logOutUser} className="nav-user-dropdown"><img src={window.logo}/>Logout{this.props.currentUser.username}</span>
                    </div>
                </header>
                <br /> */}
            <section className='left-sidebar'>
                    <LeftSidebar/>
                </section>
                <section className='center-box'>
                    {/*  */}
                </section>
                <section className='right-sidebar'>
                    {/* <RightSidebar/> */}
                </section>

            </div>
        )
    }
}

export default withRouter(NavBar)