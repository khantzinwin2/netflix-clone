import React, { useEffect, useState } from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();
    

    const trigerTransition = () =>{
        if(window.scrollY > 100){
            setShowNav(true)
        }else{
            setShowNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",trigerTransition);
        return ()=> {window.removeEventListener("scroll",trigerTransition)};
    },[])

  return (
    <div className={`nav ${showNav && "nav-black"}`}>
            <img onClick={()=>navigate("/")} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className=' nav-logo'/>
            <img onClick={()=>navigate("/profile")} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className=' nav-averter'/>
    </div>
  )
}

export default Nav