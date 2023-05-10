// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMuH24zX_h0no9oxz1N3MdK0Pcy70jDd0",
  authDomain: "reactforms-f6595.firebaseapp.com",
  projectId: "reactforms-f6595",
  storageBucket: "reactforms-f6595.appspot.com",
  messagingSenderId: "871072087833",
  appId: "1:871072087833:web:230f349fcc7a767dba4f88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
