import React from "react";

const Notification = (props) => {
  return (
    <main className="notification">
      <div>{props.message}</div>
      <div class="timer"></div>
    </main>
  );
};

export default Notification;
