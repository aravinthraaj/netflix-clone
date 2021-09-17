import React from 'react';
// import Nav from '../../../../HomeScreen/Nav';
import Nav from '../../../Components/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import {auth} from '../../../firebaseControl'

import './ProfileScreen.scss'


function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav/>
      <div className="body">
        <h1>Edit Profile</h1>
        <div className="info">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Avatar" 
          />
          <div className="details">
            <h2>{user.email}</h2>
            <div className="plans">
              <button
                onClick={()=>auth.signOut()} 
                className="signout"
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
