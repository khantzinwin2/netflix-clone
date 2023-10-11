import './App.css'
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './services/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import RouteGuard from './Components/RouteGuard';

function App() {
  const user = useSelector(selectUser);
  console.log(user)
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //login
        console.log(authUser)
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
          password: authUser.password
        }))
      }else{
        //logout
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[])


  return (
    <div className='app'>
     <Router>
      {!user?(
        <LoginScreen/>
      ) : (
      <Routes> 
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route  path='/profile' element={<ProfileScreen/>}/>
      </Routes>
      )}
     
      
    </Router>
    </div>
  )
}

export default App
