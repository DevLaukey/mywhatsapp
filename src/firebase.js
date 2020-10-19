import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1Zi-qz5_jkGdJlx5w8AeCu6pks1NqaMs",
    authDomain: "whatsapp-f994d.firebaseapp.com",
    databaseURL: "https://whatsapp-f994d.firebaseio.com",
    projectId: "whatsapp-f994d",
    storageBucket: "whatsapp-f994d.appspot.com",
    messagingSenderId: "369367478717",
    appId: "1:369367478717:web:18bbbc481e2c1d4639a2d4",
    measurementId: "G-SKEHPTECRZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;