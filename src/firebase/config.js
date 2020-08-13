import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNTKz2HVFPugm3Hfr8MlakOZSNQ0MKJ6E",
    authDomain: "stock-shoots.firebaseapp.com",
    databaseURL: "https://stock-shoots.firebaseio.com",
    projectId: "stock-shoots",
    storageBucket: "stock-shoots.appspot.com",
    messagingSenderId: "815570684680",
    appId: "1:815570684680:web:a21bb7c8d72e9835d5babd"
  };
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };