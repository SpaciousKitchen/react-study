import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYxbHvjY37WFws_ZO6I060l-RM72p2jDc',
  authDomain: 'react-study-15cda.firebaseapp.com',
  projectId: 'react-study-15cda',
  storageBucket: 'react-study-15cda.appspot.com',
  messagingSenderId: '817294280689',
  appId: '1:817294280689:web:aba9ee0b304da458616650',
  measurementId: 'G-ZDGEQHK6K0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
