import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  
  
  var config = {
    apiKey: "AIzaSyBtlAmwXe28B5jK7WtwKa7BBWbf0gJwEwo",
    authDomain: "ajl-react-connector.firebaseapp.com",
    databaseURL: "https://ajl-react-connector.firebaseio.com",
    projectId: "ajl-react-connector",
    storageBucket: "",
    messagingSenderId: "771476615104",
    appId: "1:771476615104:web:2442d504774bcea3"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase;
