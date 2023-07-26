import AuthContext from "./AuthContext";
import { useContext } from "react";

const useAuthContext = () =>{
    const userData = useContext(AuthContext);
    if(userData === undefined){
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }
    return userData;
}
export default useAuthContext;