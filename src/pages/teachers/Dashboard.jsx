import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../providers/AuthContext';

const Dashboard = () => {

    const [applications, setApplications] = useState();
    const { user, role, isLoading, authenticated } = useContext(AuthContext);

    const navigate = useNavigate();



    useEffect(() => {
        if (!isLoading) {
            if (!authenticated || role != "teacher") {
                navigate("/login");
            }
        }
    }, [isLoading, authenticated])



    useEffect(() => {
        const getApplication = async () => {
            const standard = user.standard;
            const response = await fetch(`http://localhost:5000/api/getApplicationWithStudent?standard=${standard}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            setApplications(json);
        }
        if (!isLoading) {
            getApplication();
        }


    }, [isLoading]);





    return (
        <div>
            {
                (applications) ? ((applications.length > 0) ? (
                    applications.map((application, index) => {
                        return <p key={index}>{application.title + " by " + application.student.fullname}</p>
                    })
                ) : ("No Applications")) : ""
            }
            {
                // console.log(user.name)
            }
        </div>
    )
}

export default Dashboard