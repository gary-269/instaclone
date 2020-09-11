import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB81MnYF86qi6IASZY4uqyofLk0DdLpv8Y",
    authDomain: "instaclone-be330.firebaseapp.com",
    databaseURL: "https://instaclone-be330.firebaseio.com",
    projectId: "instaclone-be330",
    storageBucket: "instaclone-be330.appspot.com",
    messagingSenderId: "166608181240",
    appId: "1:166608181240:web:c7511022aba16f13ada80d",
    measurementId: "G-PS34DF4HH4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{ db, auth, storage };

