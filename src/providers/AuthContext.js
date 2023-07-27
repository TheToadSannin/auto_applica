import { createContext, useEffect, useState } from "react"; 

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [role, setRole] = useState();


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
            // setUser(json.userData);
            // setRole(json.role);
           
        }        
        
        // getUserData();
        const us = {name:"lol"};
        setUser(us);
    }, []);


    return (
        <AuthContext.Provider value={{
            
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
