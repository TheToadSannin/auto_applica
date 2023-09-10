import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthContext";

const Dashboard = () => {
  document.getElementsByTagName("title")[0].text = "Dashboard";
  let navigate = useNavigate();
  const [applications, setApplications] = useState(null);
  const { user, role, isLoading, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) {
      if (!authenticated || role !== "student") {
        navigate("/login");
      }
    }
  }, [isLoading, authenticated, navigate, role]);

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
      json.map((application) => {
        let ist = new Date(application.timestamp);
        ist.setHours(ist.getHours() + 5);
        ist.setMinutes(ist.getMinutes() + 30);
        application.timestamp = ist.toLocaleDateString();
      });

      setApplications(json);
    };

    if (!isLoading) {
      getApplication();
    }
  }, [isLoading, user._id]);

  // if((!userData.userData ) || userData.role != "student"){
  //     return navigate("/login");
  // }

  return (
    <main className="dashboard">
      <button
        onClick={() => {
          navigate("/student/createApplication");
        }}
      >
        Create Application
      </button>
      <div>
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
      </div>
    </main>
  );
};

const AppCard = (props) => {
  return (
    <div className="appcard">
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div><p>{props.stuname}</p><p>{props.stunroll}</p></div>
      <div><div className={props.status}>{props.status}</div></div>
    </div>
  );
};

export default Dashboard;
