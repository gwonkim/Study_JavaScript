import firebase from "firebase";
import "firebase/messaging";

var firebaseConfig = {
    apiKey: "AIzaSyC_7o3zBrsEC9O2-AasfwB1EOMU08vBhWY",
    authDomain: "testproject-react-3bab8.firebaseapp.com",
    projectId: "testproject-react-3bab8",
    storageBucket: "testproject-react-3bab8.appspot.com",
    messagingSenderId: "94917453222",
    appId: "1:94917453222:web:af0ca0d6cc1113c62c5b67",
    measurementId: "G-G3GX5SD4FH"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.requestPermission().then(function () {
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
})

const Home = () => {
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

export default Home;