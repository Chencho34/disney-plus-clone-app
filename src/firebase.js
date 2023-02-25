// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCLHVIo5NQ1vj_F82zC_leQjQw3J0eQ3s",
  authDomain: "disney-plus-clone-e576b.firebaseapp.com",
  projectId: "disney-plus-clone-e576b",
  storageBucket: "disney-plus-clone-e576b.appspot.com",
  messagingSenderId: "422540585334",
  appId: "1:422540585334:web:89cd55079a23aa88e43257"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const storage = getStorage(app);
const auth = getAuth(app); //Todo pendiente
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db; //global object  

