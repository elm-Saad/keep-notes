import { initializeApp } from "./components/firebase/app";
import { getFirestore, collection } from "./components/firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCguEpHZvP_2E4fkRtgtZQ8js-1kImvM2o",
  authDomain: "react-note-app-5589c.firebaseapp.com",
  projectId: "react-note-app-5589c",
  storageBucket: "react-note-app-5589c.appspot.com",
  messagingSenderId: "986442285543",
  appId: "1:986442285543:web:4a3bf975ae2d36c2477d42"
}

const app = initializeApp(firebaseConfig)
export const dtabase = getFirestore(app)
export const notesCollection = collection(dtabase, "notes")
