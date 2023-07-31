import React, { useEffect, useState } from "react";

const CreateApplication = () => {
  const [applicationTemplates, setApplicationsTemplates] = useState(null);

  useEffect(() => {
    const getApplicationTemplates = async () => {
      const response = await fetch(
        "http://localhost:5000/api/applicationTemplates",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();
      setApplicationsTemplates(json);
    };
    getApplicationTemplates();
  }, []);

  console.log(applicationTemplates);

  return (
    <main className="applicationMain">
      <div className="cards">
        {applicationTemplates
          ? applicationTemplates.map((template, index) => {
              return (
                <AppCard
                  key={index}
                  icon={template.imgUrl}
                  subject={template.subject}
                />
              );
            })
          : " "}
      </div>
    </main>
  );
};

const AppCard = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.icon} width={100 + "%"} />
      </div>
      <div className="title-div">
        <h1>{props.subject}</h1>
      </div>
    </div>
  );
};

export default CreateApplication;
