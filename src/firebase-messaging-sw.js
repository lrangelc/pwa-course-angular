// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyCi13uiGgGg8w133VFOmDUA7jLLSya55bw",
  authDomain: "blogeekplatzilarc.firebaseapp.com",
  databaseURL: "https://blogeekplatzilarc.firebaseio.com",
  projectId: "blogeekplatzilarc",
  storageBucket: "blogeekplatzilarc.appspot.com",
  messagingSenderId: "596958338322",
  appId: "1:596958338322:web:2640197f9b5789550ae7cb",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
