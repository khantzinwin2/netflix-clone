import React from 'react'
import "./ProfilePlan.css"

const ProfilePlan = () => {
  return (
    <div className=' planScreen'>
        <div className=' planScreen_plan'>
            <div className="planScreen_info">
                <h4 >Premium </h4>
                <p >4K + HDR</p>
            </div>
            <button className=' current_btn'>Current Package</button>
        </div>
        <div className=' planScreen_plan'>
            <div className="planScreen_info">
                <h4 >Basic</h4>
                <p >720p</p>
            </div>
            <button>Subscribe</button>
        </div>
        <div className=' planScreen_plan'>
            <div className="planScreen_info">
                <h4 >Standard</h4>
                <p >1080p</p>
            </div>
            <button>Subscribe</button>
        </div>
    </div>
   
  )
}

export default ProfilePlan