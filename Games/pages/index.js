import { useEffect } from "react";
import * as firebase from "firebase";
import '@firebase/messaging'
// import "firebase/messaging";
// import { getMessaging } from "firebase/messaging";

// import { messaging } from "./firebase-messaging-sw";

var firebaseConfig = {
    apiKey: "AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY",
    authDomain: "testproject-react-3bab8.firebaseapp.com",
    projectId: "testproject-react-3bab8",
    storageBucket: "testproject-react-3bab8.appspot.com",
    messagingSenderId: "94917453222",
    appId: "1:94917453222:web:af0ca0d6cc1113c62c5b67",
    measurementId: "G-G3GX5SD4FH"
};

// const messaging = firebase.messaging();
// console.log('토큰', messaging.getToken());
/* if (!firebase.apps.length) {
    firebase.initializeApp({});
} else {
 firebase.initializeApp(firebaseConfig);
} */

/* if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
   */


/* messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  
 *//* 
Notification.requestPermission().then(function () {
   console.log('허가!');
   return messaging.getToken()
})
.then(function(token) {
   console.log(token); //토큰을 출력!
})
.catch(function (err) {
   console.log('fcm에러 : ', err);
})

messaging.onMessage(function(payload){
   console.log(payload.notification.title);
   console.log(payload.notification.body);
}) */

/* 
message.requestPermission().then(function () {
    console.log('허가!');
    return message.getToken()
})
.then(function(token) {
    console.log(token); //토큰을 출력!
})
.catch(function (err) {
    console.log('fcm에러 : ', err);
})

}) */

const Home = () => {
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


    // const messaging = firebase.messaging()
    //  messaging.usePublicVapidKey('AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY');

    // Notification.requestpermission() 푸시 알람에 대한 동의 대화상자를 표시


    const click = () => {

        return firebase.requestPermission();
    }

    return <div><h1>GAMES PAGE</h1>
        {/*  <Firebase /> */}
        <button click="click">
            Subscribe
        </button>
    </div>
}

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default Home;