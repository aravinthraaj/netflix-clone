// import { initializeApp } from 'firebase/app';
// import {auth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBqehK2vWnkS9-v7Rh2bGGpu_Wgkr3YjI8",
  authDomain: "netflix-clone-dd12c.firebaseapp.com",
  databaseURL: "https://netflix-clone-dd12c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netflix-clone-dd12c",
  storageBucket: "netflix-clone-dd12c.appspot.com",
  messagingSenderId: "864634775014",
  appId: "1:864634775014:web:6541040386fb489a3ae227"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;