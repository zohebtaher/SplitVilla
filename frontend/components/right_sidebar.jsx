import React from 'react';


class RightSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="right-sidebar-info">
                <h2>SPLITVILLA ON THE GO</h2>
                <span>Available on:</span>
                <i class="fab fa-apple fa-5x" ></i>
                <i class="fab fa-android fa-5x "></i>
                
                <img height="60px" src={window.logo} />
            </div>
        )
    }
}

export default (RightSidebar);