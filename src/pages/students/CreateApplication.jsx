import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateApplication = () => {
  const handleSubmit = async (e) => {
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateApplication;
