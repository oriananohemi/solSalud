// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBqsEkxD3sE79VBa5OE6TXUsD3MvlaG-20",
  authDomain: "solsalud-ff4bc.firebaseapp.com",
  databaseURL: "https://solsalud-ff4bc.firebaseio.com",
  projectId: "solsalud-ff4bc",
  storageBucket: "solsalud-ff4bc.appspot.com",
  messagingSenderId: "267993079630",
  appId: "1:267993079630:web:41a13861c3003a36e9c81f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const storage = firebase.storage();