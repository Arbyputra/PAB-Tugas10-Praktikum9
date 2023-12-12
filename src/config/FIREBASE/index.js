import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCMW3ZQk79ye0gsYKE_C71xh8yWoVxXDok",
    authDomain: "urasst-arbyputra.firebaseapp.com",
    projectId: "urasst-arbyputra",
    storageBucket: "urasst-arbyputra.appspot.com",
    messagingSenderId: "269646331318",
    appId: "1:269646331318:web:7861e7c513120031be5517"
});

const FIREBASE = firebase;

export default FIREBASE;