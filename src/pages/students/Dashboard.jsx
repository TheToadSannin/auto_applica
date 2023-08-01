import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthContext";

const Dashboard = () => {
  let navigate = useNavigate();
  const [applications, setApplications] = useState(null);
  const { user, role, isLoading, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) {
      if (!authenticated || role != "student") {
        navigate("/login");
      }
    }
  }, [isLoading, authenticated]);

  useEffect(() => {
    const getApplication = async () => {
      const student_id = user._id;

      const response = await fetch(
        `http://localhost:5000/api/getApplications?student_id=${student_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      setApplications(json);
    };

    if (!isLoading) {
      getApplication();
    }
  }, [isLoading]);

  // if((!userData.userData ) || userData.role != "student"){
  //     return navigate("/login");
  // }
  const createApplication = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/createApplication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
  };

  return (
    "lol"
  );
};


export default Dashboard;
