import React , {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { postFriendRequest, deleteFriendRequest } from '../../actions/request_actions';
import { fetchFriendships, postFriendship, clearFriendships } from '../../actions/friendship_actions';

import { closeModal } from '../../actions/modal_actions'

export default props => {
    const currentUser = useSelector(state => state.entities.users[state.session.id]);
    const currentUserId = useSelector(state => state.session.id);
    const otherUser = props.user;
   
    const currentUserFriendships = useSelector(state => Object.values(state.entities.friendships))

    const dispatch = useDispatch();

    const handleRequest = () => {
                    dispatch(postFriendRequest(currentUserId, otherUser.id));
                    setTimeout(() => {
                       dispatch(closeModal());
                   },30);
    }
    
    useEffect(()=>{
    dispatch(fetchFriendships(currentUserId));
    
    },[]);

     if ((currentUser.requestsAsReceiver) && (currentUser.requestsAsReceiver.some(req => req.requestor_id === otherUser.id))){
        // debugger
        const request = currentUser.requestsAsReceiver.filter(req => {
            if (req.requestor_id === otherUser.id) {
            return req;
            }
        })
        return (
            <li className ="add-friend-flex">{otherUser.username}
                <button className='edit-profile-button' onClick={
                () => {
                    dispatch(postFriendship(currentUserId, otherUser.id));
                   setTimeout(() => {
                       dispatch(closeModal());
                   },30);
                }

            }>
            Accept Request
            </button>
            <button className= 'edit-profile-button' onClick={
                () => {
                dispatch(deleteFriendRequest(request[0].id));
                setTimeout(() => {
                       dispatch(closeModal());
                   },30);
                }
            }>
                Reject Request
            </button>
            

            </li>
        )
     }
       else if ((currentUserFriendships.some(ele => ele.friendId === otherUser.id))){
        // debugger
        const friendship = currentUserFriendships.filter(ship =>{
            if (ship.friendId === otherUser.id) {
            return ship;
            }
        })
        return (
            <li className ="add-friend-flex">{otherUser.username}<button className='edit-profile-button friend-button'
            onClick={
                () => {
                dispatch(closeModal());
                }

            }
            >
            <span className= 'friended'>Friend</span>
            
            </button>

         </li>
        
        )
    
    } else if ((otherUser.requestsAsReceiver) && (otherUser.requestsAsReceiver.some(user => user.requestor_id === currentUserId)) ) { // if (this.props.currentUser.requestsSent)
    const request = otherUser.requestsAsReceiver.filter(req => {
      if (req.requestor_id === currentUserId) {
        return req;
      }
    })
    
    return (
      <li className ="add-friend-flex">{otherUser.username}  
      <button className='edit-profile-button requested-button' 
      onClick={
        () => {
            dispatch(deleteFriendRequest(request[0].id));
            setTimeout(() => {
                       dispatch(closeModal());
                   },30);
                
          } 
        }
      >
        <span className='requested'>Requested</span>
        
      </button>
      </li>
    )
    }else {
        return (
             <li className ="add-friend-flex">{otherUser.username}
        <button className="edit-profile-button" onClick={handleRequest}>
            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg> */}
            Add Friend
        </button>
        </li>
        )
    }

}



