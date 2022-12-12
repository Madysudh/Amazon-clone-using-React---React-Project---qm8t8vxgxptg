import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGRzHUBO61PmLn-bPWYHDF2gs_aYUffmM",
  authDomain: "final-4448b.firebaseapp.com",
  projectId: "final-4448b",
  storageBucket: "final-4448b.appspot.com",
  messagingSenderId: "865762297246",
  appId: "1:865762297246:web:1a4c971d134e0b1218c28f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
