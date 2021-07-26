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
                console.log('허가! Permission!');
                return messaging.getToken(); 
            })
            .then(function (token) {
                console.log(token); 
            })
            .catch(function (err) {
                console.log('fcm에러 와이라노 : ', err);
            })

        messaging.onMessage(function (payload) {
            console.log('onMessage', payload.notification.title);
            console.log(payload.notification.body);
        })

       /*  messaging.onTokenRefresh(function () {
            messaging.getToken()
                .then(function (refreshedToken) {
                    console.log(refreshedToken);
                    console.log('Token refreshed.');
                })
                .catch(function (err) {
                    console.log('Unable to retrieve refreshed token ', err);
                });
        }); */

        /*     messaging.setBackgroundMessageHandler(function(payload) {
                const title  =  payload.notification.title;
                const options  = {
                    body: payload.notification.body,
                };
                return self.registration.showNotification(title, options);
            })
             */


  /*           if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                  .register("../firebase-messaging-sw.js")
                  .then(function(registration) {
                    console.log("Registration successful, scope is:", registration.scope);
                    messaging.getToken({vapidKey: 'YOUR_VAPID_KEY', serviceWorkerRegistration : registration })
                      .then((currentToken) => {
                        if (currentToken) {
                          console.log('current token for client: ', currentToken);
                
                          // Track the token -> client mapping, by sending to backend server
                          // show on the UI that permission is secured
                        } else {
                          console.log('No registration token available. Request permission to generate one.');
                
                          // shows on the UI that permission is required 
                        }
                      }).catch((err) => {
                        console.log('An error occurred while retrieving token. ', err);
                        // catch error while creating client token
                      });  
                    })
                    .catch(function(err) {
                      console.log("Service worker registration failed, error:"  , err );
                  }); 
                } */
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