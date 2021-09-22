// import { initializeApp } from 'firebase/app';
// import {auth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const { 
  REACT_APP_FIREBASE_API_KEY, 
  REACT_APP_FIREBASE_AUTH_DOMAIN, 
  REACT_APP_FIREBASE_PROJECT_ID, 
  REACT_APP_FIREBASE_STORAGE_BUCKET, 
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
  REACT_APP_FIREBASE_APP_ID
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://netflix-clone-dd12c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};




// const firebaseConfig = {
//   apiKey: "AIzaSyBqehK2vWnkS9-v7Rh2bGGpu_Wgkr3YjI8",
//   authDomain: "netflix-clone-dd12c.firebaseapp.com",
//   databaseURL: "https://netflix-clone-dd12c-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "netflix-clone-dd12c",
//   storageBucket: "netflix-clone-dd12c.appspot.com",
//   messagingSenderId: "864634775014",
//   appId: "1:864634775014:web:6541040386fb489a3ae227"
// };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;