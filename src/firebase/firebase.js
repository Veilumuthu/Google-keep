import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAyaIIJTS76cXHiEAzHjbCL81uHhsIvg3g",
    authDomain: "keep-ef6d6.firebaseapp.com",
    databaseURL: "https://keep-ef6d6.firebaseio.com",
    projectId: "keep-ef6d6",
    storageBucket: "keep-ef6d6.appspot.com",
    messagingSenderId: "348169733733",
    appId: "1:348169733733:web:c482666d17d7138881688c",
    measurementId: "G-52LDYF0PCS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { firebase, googleAuthProvider,  database as default };
