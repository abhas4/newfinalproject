importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.4/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBsAH3WrCJge5CUTmE5oVUSJtSsgTjql1I",
    authDomain: "push-notification-62fd4.firebaseapp.com",
    databaseURL: "https://push-notification-62fd4.firebaseio.com",
    projectId: "push-notification-62fd4",
    storageBucket: "push-notification-62fd4.appspot.com",
    messagingSenderId: "790759698932",
    appId: "1:790759698932:web:bc805ae2ddebbaabd689a1",
    measurementId: "G-TX6GJ7PQVZ"
});
const messaging = firebase.messaging();