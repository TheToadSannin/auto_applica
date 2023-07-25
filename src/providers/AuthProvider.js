import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
const getStudent = async () => {
  const response = await fetch("http://localhost:5000/api/isAuth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  });
  
    const json = await response.json();
    return json.student;
};



export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  useEffect(() => {
    getStudent().then((response)=>{
        const currentStudent = response;
        setStudent(currentStudent);  
    })
  }, []);

  return (
    <AuthContext.Provider value={ {student} }>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;