import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //Firebase Config
});

// DB
const db = firebaseApp.firestore();
// storageBucket
const storage = firebase.storage();

export default db;
export { storage };
