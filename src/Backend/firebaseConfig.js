import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5WRa01HQ1HtxPXu4jrmh0etQwVXx02m4",
    authDomain: "paginaunired.firebaseapp.com",
    projectId: "paginaunired",
    storageBucket: "paginaunired.appspot.com",
    messagingSenderId: "3628471006",
    appId: "1:3628471006:web:58037c3b5055c70d1e284f"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth, signOut };
