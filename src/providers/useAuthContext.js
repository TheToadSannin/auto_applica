import AuthContext from "./AuthContext";

const useAuthContext = () =>{
    const student = useContext(AuthContext);
    if(student === undefined){
        throw new Error("useAuthContext can only be used inside AuthProvider");
    }
    return student;
}

