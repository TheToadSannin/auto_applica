import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthContext";
import { useParams } from "react-router-dom";
import Notification from "../../components/Notification";

const ViewApplication = () => {
  document.getElementsByTagName("title")[0].text = "View";
  const param = useParams();
  const navigate = useNavigate();
  const { user, role, isLoading, authenticated } = useContext(AuthContext);
  const [application, setApplication] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      if (!authenticated || role != "teacher") {
        navigate("/login");
      }
    }
  });

  useEffect(() => {
    const viewapplication = async () => {
      const response = await fetch(
        `http://localhost:5000/api/viewApplication?id=${param.appid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log(json);

      setApplication(json);
    };
    viewapplication();
  }, []);

  const handleApprove = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/updateApplication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationid: application._id,
          status: "Accepted",
        }),
      }
    );
    const json = await response.json();
    setAlertMessage(json.message);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);

    console.log(json);
  };
  const handleReject = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/updateApplication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationid: application._id,
          status: "Rejected",
        }),
      }
    );
    const json = await response.json();
    setAlertMessage(json.message);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
    console.log(json);
  };

  return (
    <main className="viewApplication">
      {application ? (
        <div
          className="appbody"
          dangerouslySetInnerHTML={{ __html: application.body }}
        ></div>
      ) : (
        ""
      )}
      <div className="actionbtns">
        <button onClick={handleApprove} className="approvebutton">
          Approve
        </button>
        <button onClick={handleReject} className="rejectbutton">
          Reject
        </button>
      </div>
      {alertVisible ? <Notification message={alertMessage} /> : ""}
    </main>
  );
};

export default ViewApplication;
