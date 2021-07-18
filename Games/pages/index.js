import { useEffect } from "react";
import firebase from "firebase";
// import '@firebase/messaging'
import { firebaseConfig } from '../public/firebase';



const Home = () => {

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
        const messaging = firebase.messaging();

        messaging.requestPermission()
            .then(function () {
                console.log('허가!');
                console.log('token', messaging.getToken());
                return messaging.getToken(); //토큰을 받는 함수를 추가!
            })
            .then(function (token) {
                console.log(token); //토큰을 출력!
            })
            .catch(function (err) {
                console.log('fcm에러 : ', err);
            })

        messaging.onMessage(function (payload) {
            console.log(payload.notification.title);
            console.log(payload.notification.body);
        })

        messaging.onTokenRefresh(function () {
            messaging.getToken()
                .then(function (refreshedToken) {
                    console.log(refreshedToken);
                    console.log('Token refreshed.');
                })
                .catch(function (err) {
                    console.log('Unable to retrieve refreshed token ', err);
                });
        });

        /*     messaging.setBackgroundMessageHandler(function(payload) {
                const title  =  payload.notification.title;
                const options  = {
                    body: payload.notification.body,
                };
                return self.registration.showNotification(title, options);
            })
             */
    }, []);

    return (
        <div>
            <h1>GAMES PAGE</h1>
            <button>
                HELLO WORLD!
            </button>
        </div>
    );
}


export default Home;