
import * as firebase from "firebase/app"

import 'firebase/auth'
import 'firebase/database'
// import "firebase/firestore"

let firebaseConfig = {
  apiKey: "AIzaSyCV7EmMJgSiaqCzkmGwkg2mKeTB7KQdAh4",
  authDomain: "task-manager-a3f1a.firebaseapp.com",
  projectId: "task-manager-a3f1a",
  storageBucket: "task-manager-a3f1a.appspot.com",
  messagingSenderId: "57068375464",
  appId: "1:57068375464:web:c3e7483b29e8c8f6c2219d",
  measurementId: "G-ESJV4R6SHQ"
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {
  firebaseAuth,
  firebaseDb
}
