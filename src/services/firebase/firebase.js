import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkZul5LQa_81evtGSJj7uPVTLjNjzDDsg",
    authDomain: "dsthd-1.firebaseapp.com",
    databaseURL: "https://dsthd-1.firebaseio.com",
    projectId: "dsthd-1",
    storageBucket: "dsthd-1.appspot.com",
    messagingSenderId: "559094602856"
  };

firebase.initializeApp(config);
export default firebase;