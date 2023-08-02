import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useContext } from "react";
import AuthContext from "../../providers/AuthContext";
import Notification from "../../components/Notification";

const EditApplication = () => {
  const param = useParams();
  const { user, role, isLoading, authenticated } = useContext(AuthContext);
  const [application, setApplication] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const { quill, quillRef } = useQuill();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!authenticated || role != "student") {
        navigate("/login");
      }
    }
  });
  useEffect(() => {
    const getApplication = async () => {
      const response = await fetch(
        `http://localhost:5000/api/getApplicationTemplate?id=${param.applicationID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      setApplication(json);
    };

    getApplication();
  }, []);

  useEffect(() => {
    if (quill && !isLoading) {
      let body = application.body;

      let countName = (body.match(/{name}/g) || []).length;
      let countStandard = (body.match(/{standard}/g) || []).length;

      let i = 0;
      let j = 0;
      while (i < countName || j < countStandard) {
        body = body.replace("{name}", user.fullname);
        body = body.replace("{standard}", user.standard);
        i++;
        j++;
      }

      body = body.replace("{standard}", user.standard);
      quill.clipboard.dangerouslyPasteHTML(application.subject + "<br>" + body);
    }
  }, [quill, isLoading]);

  const getEditorData = () => {
    if (quill) {
      return quillRef.current.firstChild.innerHTML;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposne = await fetch(
      "http://localhost:5000/api/createApplication",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          editorData: getEditorData(),
          appSubject: application.subject,
          imgUrl: application.imgUrl,
          student_id: user._id,
        }),
      }
    );

    const handleAlert = () => {
      setAlertMessage(json.message);
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    };

    const json = await resposne.json();

    if (json.success) {
      handleAlert();
    }
  };

  return (
    <main className="editAppMain">
      <div>
        {application ? (
          <div ref={quillRef}>
            {/* <p>Subject - {application.subject}</p>
                        <p dangerouslySetInnerHTML={{ __html: application.body }}></p> */}
          </div>
        ) : (
          "No Template Found"
        )}
        <button onClick={handleSubmit} className="submitbutton">
          Submit
        </button>
      </div>
      {alertVisible ? <Notification message={alertMessage} /> : ""}
    </main>
  );
};

export default EditApplication;
