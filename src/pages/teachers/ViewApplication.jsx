import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthContext";
import { useParams } from "react-router-dom";

const ViewApplication = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { user, role, isLoading, authenticated } = useContext(AuthContext);
  const [application, setApplication] = useState(null);

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

  return (
    <main className="viewApplication">
      {application ? (
        <div dangerouslySetInnerHTML={{ __html: application.body }}></div>
      ) : (
        ""
      )}
      <div className="actionbtns">
        <button className="approvebutton">Approve</button>
        <button className="rejectbutton">Reject</button>
      </div>
    </main>
  );
};

export default ViewApplication;
