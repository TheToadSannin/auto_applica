import React from 'react'

const Dashboard = () => {

    const isAuth = async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/isAuth", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        console.log(json.student);
    }


  return (
    <div><form onSubmit={isAuth}>
        <button type="submit">Click to Auth</button>
        </form></div>

  )
}

export default Dashboard