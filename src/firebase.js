import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCs3TOw1bXLM_SMfylfC0qttx6BKFf2KDc",
  authDomain: "fb-clone-40023.firebaseapp.com",
  projectId: "fb-clone-40023",
  storageBucket: "fb-clone-40023.appspot.com",
  messagingSenderId: "830325276421",
  appId: "1:830325276421:web:07acdf52a6037d9d1c416c",
  measurementId: "G-4H989T5GHV",
});

const db = firebaseApp.firestore();

export default db;
