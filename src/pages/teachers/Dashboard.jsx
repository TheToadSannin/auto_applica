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
      json.map((application) => {
        let ist = new Date(application.timestamp);
        ist.setHours(ist.getHours() + 5);
        ist.setMinutes(ist.getMinutes() + 30);
        application.timestamp = ist.toLocaleDateString();
      });
      setApplications(json);
      // console.log(json);
    };
    if (!isLoading) {
      getApplication();
    }
  }, [isLoading]);

  return (
    <main className="dashboard">
      {applications
        ? applications.map((application, index) => {
            return !application.isAccepted ? (
              <AppCard
                key={index}
                title={application.title}
                date={application.timestamp}
                status={application.isAccepted}
                stuname={application.student.fullname}
                appid={application._id}
              />
            ) : (
              ""
            );
          })
        : ""}
    </main>
  );
};

const AppCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="appcard"
      onClick={() => {
        navigate(`/teacher/viewapplication/${props.appid}`);
      }}
    >
      <div>
        <p>{props.title}</p>
      </div>
      <hr />
      <div>
        <p> Submitted by: {props.stuname}</p>
        <p>
          Status:{" "}
          {props.isAccepted != 1
            ? props.isAccepted != 0
              ? "rejected"
              : "pending"
            : "accepted"}
        </p>
        <p> Submission Date: {props.date}</p>
      </div>
    </div>
  );
};

export default Dashboard;
