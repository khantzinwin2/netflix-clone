import React, { useState } from 'react'
import "./LoginScreen.css"
import "./SignUpScreen"
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

 

  return (
    <>
    
        <div className='loginScreen'>
        <div className="login_background">
            <img 
            className='login_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <button className='login_button' onClick={()=>setSignIn(true)}>Sign In</button>
            <div className="login_gradient"/>
            <div className="login_body">
            {signIn ? (<SignUpScreen/>):
                    (<>
                     <h1>Unlimited films, TV programmes and more</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login_input">
                      <form>
                        <input type="email" placeholder='Email address' />
                        <button className='login_getStarted' type='submit' onClick={()=>setSignIn(true)}>GET STARTED</button>
                      </form>
                    </div>
                    </>
                   
                    )}
            </div>
           
        </div>
    </div>
      
    </>
    
    
  )
}

export default LoginScreen