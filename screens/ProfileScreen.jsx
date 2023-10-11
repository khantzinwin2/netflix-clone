import React from 'react'
import Nav from '../Components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../services/userSlice'
import "./ProfileScreen.css"
import { auth } from '../firebase'
import ProfilePlan from './ProfilePlan'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {
    const user = useSelector(selectUser);
  return (
    <div className='profile_screen'>
        <Nav/>
        <div className="profile_body">
                <h1 className=' text-4xl'>Edit Profile</h1>
                <div className="profile_info">
                    <img className=' w-32' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <h3>Plans</h3>
                            <ProfilePlan/>
                        </div>
                        <button onClick={()=> auth.signOut()} className=' profile_signout'>Sign Out</button>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default ProfileScreen