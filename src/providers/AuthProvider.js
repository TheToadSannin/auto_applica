import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import AuthContext from './AuthContext';

export const AuthProvider = ({children}) =>{
    const [userData, setUserData] = useState(null);
    const [role, setRole] = useState("");
    useEffect(()=>{

        const getUserData = async()=>{
            const response = await fetch("http://localhost:5000/api/isAuth", {
                method: "GET",
                headers: {
                    "Content-Type":"application/json",
                    "x-access-token": localStorage.getItem("token"),
                }
            });
            const json = await response.json();
            setUserData(json.userData);
            setRole(json.role);
        }        
        // setStudent(currentStudent);
        getUserData();
    }, []);
    return (<AuthContext.Provider value={{userData, role}}>{children}</AuthContext.Provider>)

};
