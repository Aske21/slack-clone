import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-o3NNcSqYS4-SDKHx_bUSSUMsYctM35c",
  authDomain: "slack-clone-3b253.firebaseapp.com",
  projectId: "slack-clone-3b253",
  storageBucket: "slack-clone-3b253.appspot.com",
  messagingSenderId: "776605037209",
  appId: "1:776605037209:web:48e1e689f3960ff8993e08",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
