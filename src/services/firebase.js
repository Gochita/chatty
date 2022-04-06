import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyABiBQU867tqdtvHiTWm6Y6zzckswWGz-k",
  authDomain: "chatty-32e79.firebaseapp.com",
  projectId: "chatty-32e79",
  storageBucket: "chatty-32e79.appspot.com",
  messagingSenderId: "72351457212",
  appId: "1:72351457212:web:6b3e2a73ce95b62f70d5b9"
};
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth;
  export const db = firebase.database();