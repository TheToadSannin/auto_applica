import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

 const [students, setStudents] = useState();

 useEffect(()=>{
    const getApplication = async ()=>{
        const response = await fetch()
    }
 }, []);
        
  return (
    <div>

    </div>
  )
}

export default Dashboard