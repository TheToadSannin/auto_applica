import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

 const [applications, setApplications] = useState();

 useEffect(()=>{
    const getApplication = async ()=>{
        const standard = "10000000";
        const response = await fetch(`http://localhost:5000/api/getApplicationWithStudent?standard=${standard}`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();
        setApplications(json);
    }

    getApplication();
 }, []);
        
  return (
    <div>
        {
            (applications)?(
                applications.map((application, index)=>{
                    return <p key={index}>{application.title + " by "+application.student.fullname}</p>
                })
            ):("No Applications")
        }
    </div>
  )
}

export default Dashboard