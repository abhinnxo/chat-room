import React from "react";
import "./css/message.css";

function Message(props) {
  const isUser = props.email === props.message.email;
  return (
    <div className="message_bubble">
      <div className={isUser ? "message__user" : "message__guest"}>
        <p>{props.message.username}</p>
        <h3>{props.message.message}</h3>
      </div>
    </div>
  );
}

export default Message;
