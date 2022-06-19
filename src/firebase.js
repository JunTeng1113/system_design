// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXag5BZD4PKybOJe_AoClOMHOWqX5pA2Y",
    authDomain: "system-design-ae5a8.firebaseapp.com",
    databaseURL: "https://system-design-ae5a8-default-rtdb.firebaseio.com",
    projectId: "system-design-ae5a8",
    storageBucket: "system-design-ae5a8.appspot.com",
    messagingSenderId: "135260459036",
    appId: "1:135260459036:web:38b85dd4dfb82a458d8fd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();