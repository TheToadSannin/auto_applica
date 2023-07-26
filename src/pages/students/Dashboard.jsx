import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../providers/useAuthContext'

const Dashboard = () => {
  let navigate = useNavigate();
  const userData = useAuthContext();
  if((!userData.userData ) || userData.role != "student"){
      return navigate("/login");
    }

    const createApplication = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createApplication", {
            method: "POST",
            headers:{   
                "Content-Type":"application/json"
            }
        })

        const json = await response.json();
        console.log(json);
    }

    const getApplication = async ()=>{
        const response = await fetch()
    }

    
  return (
    <div>
       {userData.userData.fullname}

       <form onSubmit={createApplication}>
        <button type="submit">Create Application</button>
       </form>
    </div>

  )
}

export default Dashboard;