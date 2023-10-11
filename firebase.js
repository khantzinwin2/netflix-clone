import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCw2xY8bL5w7ANexa73NvIVNuwPzWfsFIo",
  authDomain: "netflix-clone-f496b.firebaseapp.com",
  projectId: "netflix-clone-f496b",
  storageBucket: "netflix-clone-f496b.appspot.com",
  messagingSenderId: "736737179558",
  appId: "1:736737179558:web:5a0bf9284362b40af58167"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;