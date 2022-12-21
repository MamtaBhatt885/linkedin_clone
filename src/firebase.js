import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8eiehYaSw6fwdypMZqkVB7m3Qf2MCkGM",
    authDomain: "linkedin-fbc25.firebaseapp.com",
    projectId: "linkedin-fbc25",
    storageBucket: "linkedin-fbc25.appspot.com",
    messagingSenderId: "1076643715258",
    appId: "1:1076643715258:web:44b39d5e2f60e926f30a83"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };