import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyCLdA_EdjKxOcI6xVS2a7PEPXs_bFXchXE",
    authDomain: "music-app-a0ba5.firebaseapp.com",
    databaseURL: "https://music-app-a0ba5.firebaseio.com",
    projectId: "music-app-a0ba5",
    storageBucket: "",
    messagingSenderId: "4736526129",
    appId: "1:4736526129:web:383da1e84ff4efa9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;