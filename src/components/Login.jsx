import React from "react";
import firebase from "firebase";
import "./css/login.css";

function Login() {
  //AUTH
  var provider = new firebase.auth.GoogleAuthProvider();

  function googleLogin() {
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log("AUTH ERROR!", error);
      });
  }

  // firebase
  //   .auth()
  //   .getRedirectResult()
  //   .then(function (result) {
  //     // The signed-in user info.
  //     var user = result.user;
  //     console.log(user);
  //   })
  //   .catch(function (error) {
  //    console.log("AUTH ERROR", erroe)
  //   });

  // function googleSignout() {
  //   firebase.auth().signOut();
  //   document.querySelector(".signout-button").style.display = "none";
  //   document.querySelector(".login-button").style.display = "block";
  //   console.log("AUTH", firebase.auth());
  // }

  return (
    <div className="login-container">
      <h1>CHAT ROOM</h1>
      <div className="login-div">
        <button onClick={googleLogin} className="login-button">
          Google Login
        </button>
      </div>
    </div>
  );
}

export default Login;
