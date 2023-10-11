import React, { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from '../firebase';

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const Register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch(error=>alert(error.message))
  }
  const signIn = (e) =>{
    e.preventDefault(); 
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>alert(error.message))
  }
  return (
    <div className='signupScreen'>
      <form>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" defaultValue={"abc@gmail.com"} placeholder='Email adderass'/>
          <input ref={passwordRef} type="password" defaultValue={"abcabc"} placeholder='Password'/>
          <button onClick={signIn}>Sign In</button>
          <h4><span className='signup_graytext'>New to Netflix?</span> 
          <span className='signup_link' onClick={Register} > Sign Up now.</span></h4>
      </form>
         
    </div>
  )
}

export default SignUpScreen