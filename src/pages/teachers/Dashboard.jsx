import React from 'react'
import useAuthContext from '../../providers/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  let navigate = useNavigate();
  const userData = useAuthContext();
  if((!userData.userData ) || userData.role != "teacher"){
        return navigate("/login");
  }
        
  return (
    <div>{userData.userData.fullname}</div>
  )
}

export default Dashboard