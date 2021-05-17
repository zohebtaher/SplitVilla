import React from 'react';
import AllUsersContainer from '../users/all_users_container'


class Modal extends React.Component {
    constructor(props){
        super(props)
}

stopProp(e) {
    e.stopPropagation();
}

render() {
    if (!this.props.modal) {
        return null
    };
    let component = null;
    switch(this.props.modal.formName) {
        case 'addFriend':
            component = <AllUsersContainer/>
            break;
        // 
        // 
        default:
            return null;
    }
    return (
        <div className = 'modal-background' onClick={this.props.closeModal}>
            <div className='modal-child' onClick={this.stopProp}>{component}</div>
        </div>
    )
    }
}

export default Modal;
