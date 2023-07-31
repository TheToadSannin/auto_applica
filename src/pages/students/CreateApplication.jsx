import React from "react";

const CreateApplication = () => {
  return (
    <main className="applicationMain">
      <div className="cards">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </main>
  );
};

const AppCard = () => {
  return (
    <div className="card">
      <div>
        <img
          src="https://media.tenor.com/rs1yXZWnBOgAAAAC/gif-arts.gif"
          width={100 + "%"}
        />
      </div>
      <div className="title-div">
        <h1>Application for Sick Leave</h1>
      </div>
    </div>
  );
};

export default CreateApplication;
