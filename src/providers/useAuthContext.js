import AuthContext from "./AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const student = useContext(AuthContext);
  if (student === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return student;
};

export default useAuthContext;
