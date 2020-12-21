import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./css/chatroom.css";
import db from "./firebase";
import firebase from "firebase";

function ChatRoom(props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  //runs when app component loads
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  useEffect(() => {
    setUserName(props.username);
  }, []); //condition

  // Scroll to bottom of the page
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const sendMessage = (event) => {
    event.preventDefault();

    // push the remote message to the DB
    db.collection("messages").add({
      message: input,
      username: props.username,
      email: props.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // put the messages in the state
    setInput("");
  };
  //Signout
  function googleSignout() {
    firebase.auth().signOut();
    console.log("AUTH", firebase.auth());
  }

  return (
    <div className="App">
      <nav>
        <div className="title-div">
          <h1>CHAT ROOM 🚀</h1>
          <h3>Welcome {userName}</h3>
        </div>
        <div className="title-button">
          <button onClick={googleSignout} className="logout">
            LOG OUT
          </button>
        </div>
      </nav>

      {/* messages */}
      <div className="message-box">
        {messages.map((message) => (
          <Message message={message} username={userName} email={props.email} />
        ))}
      </div>
      <div className="chatbox">
        {/* Input field */}
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          {/* send button */}
          <button disabled={!input} type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;
