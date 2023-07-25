import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthContext';

const Dashboard = () => {
  let navigate = useNavigate();
  const student = useContext(AuthContext);
  if(!student){
    return navigate("/login");
  }
  return (
    <div>
       {/* {console.log(student, " from dashboard")} */}
    </div>

  )
}

export default Dashboard