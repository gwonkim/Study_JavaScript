import { useEffect } from "react";
import firebase from "firebase";
import '@firebase/messaging'


/* import('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
import('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 */


useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js';
    script1.async = true;
    document.body.appendChild(script1);
  return () => {
      document.body.removeChild(script1);
    }
  }, []);

useEffect(() => {
    const script2 = document.createElement('script');
    script2.src = 'https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js';
    script2.async = true;
    document.body.appendChild(script2);
  return () => {
      document.body.removeChild(script2);
    }
  }, []);

const config =  { 
    apiKey: "AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY",
    authDomain: "testproject-react-3bab8.firebaseapp.com",
    projectId: "testproject-react-3bab8",
    storageBucket: "testproject-react-3bab8.appspot.com",
    messagingSenderId: "94917453222",
    appId: "1:94917453222:web:af0ca0d6cc1113c62c5b67",
    measurementId: "G-G3GX5SD4FH"
}; 
firebase.initializeApp(config);

const messaging = firebase.messaging();