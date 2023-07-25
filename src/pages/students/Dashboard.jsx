import React from 'react'
import useAuthContext from "../../providers/useAuthContext";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();
  const { student } = useAuthContext();
  if(!student){
    return navigate("/login");
  }

  return (
    <div>
        {console.log(student)}
    </div>

  )
}

export default Dashboard