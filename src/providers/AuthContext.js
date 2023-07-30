import { createContext, useEffect, useState } from "react"; 

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState();
    const [role, setRole] = useState();
    const [isLoading, setIsLoadind] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);


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
            if (json.userData != null) {
                setIsLoadind(false);
                setUser(json.userData);
                setRole(json.role);
                setAuthenticated(true);
            }
            else{
                setIsLoadind(false);
            }
           
        }        
        
        getUserData();
    }, []);


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            role,
            setRole,
            isLoading,
            authenticated,
            setAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
