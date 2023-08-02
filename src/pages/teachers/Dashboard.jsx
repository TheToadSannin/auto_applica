import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";

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
  }, [isLoading, authenticated]);

  useEffect(() => {
    const getApplication = async () => {
      const standard = user.standard;
      const response = await fetch(
        `http://localhost:5000/api/getApplicationWithStudent?standard=${standard}`,
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

  return (
    <main className="dashboard">
      {applications
        ? applications.map((application, index) => {
            return (
              <AppCard
                key={index}
                title={application.title}
                date={application.timestamp}
                status={application.isAccepted}
              />
            );
          })
        : ""}
    </main>
  );
};

const AppCard = (props) => {
  return (
    <div className="appcard">
      <div>
        <p>{props.title}</p>
      </div>
      <hr />
      <div>
        <p>Status: {props.isAccepted ? "Accepted" : "Pending"}</p>
        <p> Submission Date: {props.date}</p>
      </div>
    </div>
  );
};

export default Dashboard;
