import { React, useEffect, useState } from "react";
import firebase from "firebase";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Login from "./components/Login";

function App() {
  let [authState, setAuthState] = useState(false);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");

  //checking auth state
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName + "\n" + user.email + "\n" + user);
        setUsername(user.displayName);
        setEmail(user.email);
        setAuthState(true);
      } else {
        console.log("User is not logged in");
        setUsername("");
        setEmail("");
        setAuthState(false);
      }
    });
  }, []);

  return (
    <div>
      {authState ? <ChatRoom username={username} email={email} /> : <Login />}
    </div>
  );
}

export default App;
