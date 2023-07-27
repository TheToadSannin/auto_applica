import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate();
    // const userData = useAuthContext();
    const [applications, setApplications] = useState(null);


    useEffect(()=>{
        const student_id = "64b98ed1aadcf3cb6a36a738";
        const getApplication = async ()=>{
            const response = await fetch(`http://localhost:5000/api/getApplications?student_id=${student_id}`,{
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


    // if((!userData.userData ) || userData.role != "student"){
    //     return navigate("/login");
    // }
    const createApplication = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createApplication", {
            method: "POST",
            headers:{   
                "Content-Type":"application/json"
            }
        });

        const json = await response.json();
    }



    // console.log(applications);



    
  return (
    <div>

       <form onSubmit={createApplication}>
        <button type="submit">Create Application</button>
       </form>

       {
        applications != null?(
        applications.map((application, index)=>{
            return <p key={index}>{application.title}</p>
        })):<p>No Application found</p>
       }
    </div>

  )
}

export default Dashboard;