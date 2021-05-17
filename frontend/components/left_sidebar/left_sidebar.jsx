import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';


class LeftSidebar extends React.Component {
    constructor(props) {
        super(props);
    

        this.state = {
            ui: { modal: null}
        };
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {

        return (
            <div className='left-sidebar-links'>
                <NavLink to="/dasboard" id="ls-dashboard-link"><img height="16px" src={window.logo}/>Dashboard</NavLink>
                {/* <NavLink to="/recent" id="ls-recent-link"><i className="fas fa-flag><i>Recent activity</NavLink>" */}
                {/* <NavLink to="/all" id="ls-all-link"><i className="fas fa-list"></i> All expenses</NavLink> */}
                <br />
                <br />
                
                <div  className="ls_header">
                    <span>FRIENDS</span>
                    <br />
                    <br />
                    <a id="add-friend-link" onClick={()=> this.props.openModal('addFriend')}><i className="fas fa-plus fa-sm"></i>add</a>
                    

                </div>
            </div>
        );
    }
}

export default withRouter(LeftSidebar);