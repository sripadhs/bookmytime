import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyDJmcwvCPhpKZGe8PJ9RPkxfbC6yYgel8k",
    authDomain: "fir-82103.firebaseapp.com",
    projectId: "fir-82103",
    storageBucket: "fir-82103.appspot.com",
    messagingSenderId: "234228669123",
    appId: "1:234228669123:web:bb38d3d00cd50f7792a076",
    measurementId: "G-JVZZGQECC3"
  };

export const Firebase=firebase.initializeApp(firebaseConfig);