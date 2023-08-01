import React from "react";

const Notification = (props) => {
  return (
    <main className="notification">
      <div>{props.message}</div>
    </main>
  );
};

export default Notification;
