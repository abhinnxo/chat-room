import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4eBIhrjEc_o3Y9gy_G1zO75sO05pkr60",
  authDomain: "react-chat-app-21.firebaseapp.com",
  databaseURL: "https://react-chat-app-21-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-21",
  storageBucket: "react-chat-app-21.appspot.com",
  messagingSenderId: "704762752504",
  appId: "1:704762752504:web:a6d86a57f1f2c3d45afa0d",
  measurementId: "G-Y0FK7GFN8F",
});

// DB
const db = firebaseApp.firestore();
// storageBucket
const storage = firebase.storage();

export default db;
export { storage };
