import React from "react";
import firbase from "firebase";
import { storage } from "./firebase";

function Images() {
  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  // Create a child reference
  var imagesRef = storageRef.child("images");
  // imagesRef now points to 'images'

  return <div></div>;
}

export default Images;
