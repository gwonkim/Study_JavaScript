/* // Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/messaging";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

/* var firebaseCon = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",

    // 이 값은 자동으로 입력
    var firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://myapp-project-123.firebaseio.com",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST"
};
  }; */

/* const firebaseConfig = {
    projectId: 'testproject-react-3bab8',
  /*   apiKey: "Your api key",
    messagingSenderId: '94917453222',
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging()
messaging.usePublicVapidKey("");
Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
    console.log('Notification permission granted. dd');
  } else {
    console.log('Unable to get permission to notify. dd');
  }
}); 

var firebaseConfig = {
    apiKey: "AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY",
    authDomain: "testproject-react-3bab8.firebaseapp.com",
    projectId: "testproject-react-3bab8",
    storageBucket: "testproject-react-3bab8.appspot.com",
    messagingSenderId: "94917453222",
    appId: "1:94917453222:web:af0ca0d6cc1113c62c5b67",
    measurementId: "G-G3GX5SD4FH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  const messaging = firebase.messaging()
  messaging.usePublicVapidKey('AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY');

  // Notification.requestpermission() 푸시 알람에 대한 동의 대화상자를 표시
  Notification.requestPermission().then(function(permission) { 
    if (permission === 'granted') { 
      console.log('Notification permission granted. DDD');
    } else {
      console.log('Unable to get permission to notify.  DDDDD');
    }
  });


messaging.getToken().then(token =>{
    console.log(token)
})
// const FIREBASE_TOKEN = '1//0eI5bGeiA8MJHCgYIARAAGA4SNwF-L9IrO1ABP3pZJnLWSXenVjNphfAeI3hXxM36kaIVp2rO-2RT5C1kNCLaAHwzm0lzoQ79q9w';
// localStorage.setItem('token', FIREBASE_TOKEN);


// --token TOKEN



export default Home; */