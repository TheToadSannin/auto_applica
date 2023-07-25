import {useState, useEffect} from 'react';

import AuthContext from './AuthContext';

const getStudent = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/isAuth", {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "x-access-token": localStorage.getItem("token")
        }
    });
    return await response.json();
}

export const AuthProvider = ({children}) =>{
    const {student, setStudent} = useState(null);
    useEffect(()=>{
        const currentStudent = getStudent();
        setStudent(currentStudent);
    }, []);

    return (<AuthContext.Provider value={{student}}>{children}</AuthContext.Provider>)

};
