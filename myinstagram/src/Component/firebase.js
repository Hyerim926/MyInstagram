import firebase from "firebase/compat";

firebase.initializeApp({
    apiKey: "AIzaSyDtqIy3yc8WqKfO3XBBCvYgzyXVO_qIYQ8",
    authDomain: "myinstagram-80d5c.firebaseapp.com",
    projectId: "myinstagram-80d5c",
    storageBucket: "myinstagram-80d5c.appspot.com",
    messagingSenderId: "713891220884",
    appId: "1:713891220884:web:9c372ef8cfaa4d3276d381"
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };