import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDkTmMr1f8AOcGvarRLTf0tqN9ucmsZHJQ',
  authDomain: 'webshinelearning.firebaseapp.com',
  projectId: 'webshinelearning',
  storageBucket: 'webshinelearning.appspot.com',
  messagingSenderId: '91446689131',
  appId: '1:91446689131:web:ec2413a3c8e66623a3202e',
  measurementId: 'G-G8J0XRN362',
});
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { db, auth };
