import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhcmS7iWJyveyfo7lYepGK5etro5_VKKk",
  authDomain: "auth-login-805f8.firebaseapp.com",
  projectId: "auth-login-805f8",
  storageBucket: "auth-login-805f8.appspot.com",
  messagingSenderId: "789043990261",
  appId: "1:789043990261:web:f5581f0e9e14b7adbbffbc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };
