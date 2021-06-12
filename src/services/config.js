import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBKWcnvvEZOQFX_oMaOhk3720qytZX8sW8",
  authDomain: "vsp-help-desk.firebaseapp.com",
  projectId: "vsp-help-desk",
  storageBucket: "vsp-help-desk.appspot.com",
  messagingSenderId: "516424762857",
  appId: "1:516424762857:web:5fcf23446c05011d387778",
});

export default firebaseConfig;
