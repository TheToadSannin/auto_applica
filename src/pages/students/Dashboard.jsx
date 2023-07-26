import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../providers/useAuthContext'

const Dashboard = () => {
  let navigate = useNavigate();
  const userData = useAuthContext();
  if((!userData.userData ) || userData.role != "student"){
      return navigate("/login");
    }
    
  return (
    <div>
       {userData.userData.fullname}
    </div>

  )
}

export default Dashboard;