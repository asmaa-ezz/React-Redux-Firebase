import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMdP1bLfJvBtHMd2loXL7AVS_xT0PE27s",
  authDomain: "test-react-redux-firebas.firebaseapp.com",
  databaseURL: "https://test-react-redux-firebas.firebaseio.com",
  projectId: "test-react-redux-firebas",
  storageBucket: "test-react-redux-firebas.appspot.com",
  messagingSenderId: "47698266302"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
