// Compiled with problems:X ERROR in ./src/firebase.js 3:0-32 Module not found: Error: Package path . is not exported from package C:\Users\asus\Desktop\Slack\pychat\node_modules\firebase (see exports field in C:\Users\asus\Desktop\Slack\pychat\node_modules\firebase\package.json) Did you mean './firebase'? Requests that should resolve in the current directory need to start with './'. Requests that start with a name are treated as module requests and resolve within module directories (node_modules, C:\Users\asus\Desktop\Slack\pychat\node_modules). If changing the source code is not an option there is also a resolve options called 'preferRelative' which tries to resolve these kind of requests in the current directory too.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8-i6m20pPhL4U9ZL29R9GINW01Br7UMk",
  authDomain: "resources-pychat.firebaseapp.com",
  projectId: "resources-pychat",
  storageBucket: "resources-pychat.appspot.com",
  messagingSenderId: "320944844715",
  appId: "1:320944844715:web:f05e18f618e1de57e16cee",
  measurementId: "G-R0VJNKKL2K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth, provider}