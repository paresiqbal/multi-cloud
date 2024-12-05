// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEY7UCrXSzblGM3sckajoOUrvNCyxn0x0",
  authDomain: "multi-cloud-762ae.firebaseapp.com",
  projectId: "multi-cloud-762ae",
  storageBucket: "multi-cloud-762ae.firebasestorage.app",
  messagingSenderId: "372118464780",
  appId: "1:372118464780:web:1a8145553687d8c3ed8129",
  measurementId: "G-BS004PTSVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, googleProvider, db, storage };
