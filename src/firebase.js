
// Import the functions you need from the SDKs you nee
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVlZURHWDSBc9hU5zddC9VMcJLgdYbgy4",
  authDomain: "clone-89806.firebaseapp.com",
  projectId: "clone-89806",
  storageBucket: "clone-89806.appspot.com",
  messagingSenderId: "912633404567",
  appId: "1:912633404567:web:ecb792739151840e2e5dd2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;












