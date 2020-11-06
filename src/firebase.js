import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmwiJZeVX4X0oYTl4on_uyj2ucg3ZSP24",
  authDomain: "messenger-react-clone-cp.firebaseapp.com",
  databaseURL: "https://messenger-react-clone-cp.firebaseio.com",
  projectId: "messenger-react-clone-cp",
  storageBucket: "messenger-react-clone-cp.appspot.com",
  messagingSenderId: "560712321856",
  appId: "1:560712321856:web:8ca706f46b353be49048a5",
  measurementId: "G-6D3TCSEY80",
});
const db = firebaseApp.firestore();

export default db;
