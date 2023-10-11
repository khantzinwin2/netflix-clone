import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../services/userSlice'
import { Navigate } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';

const RouteGuard = ({children}) => {
  const user = useSelector(selectUser);
  if(!user)return <Navigate to={<LoginScreen/>}/>
  else children;
}

export default RouteGuard