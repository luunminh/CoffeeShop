import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyClQ6T7R3M1LtZ0MOHTAEu59_4PcNpwNLs",
    authDomain: "coffeeshop-c0145.firebaseapp.com",
    projectId: "coffeeshop-c0145",
    storageBucket: "coffeeshop-c0145.appspot.com",
    messagingSenderId: "231660448692",
    appId: "1:231660448692:web:5684f68d8b09af6b21a0e1",
    measurementId: "G-8BW2E0CWL6"
};


const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
// firebase.analytics()

// const auth = firebase.auth();
const db = firebase.firestore();


export { auth, app, db }

export default firebase;