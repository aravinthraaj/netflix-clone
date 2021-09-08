import React from 'react';
import Nav from '../../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import {auth} from '../../../firebaseControl'


import './styles.css';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Avatar" 
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <button
                onClick={()=>auth.signOut()} 
                className="profileScreen__signout"
              >
                  Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
