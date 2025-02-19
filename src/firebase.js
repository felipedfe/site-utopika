import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLg8orlXPYY18M4E79xPj1VPMmfhCJkrk",
  authDomain: "site-utopika.firebaseapp.com",
  projectId: "site-utopika",
  storageBucket: "site-utopika.firebasestorage.app",
  messagingSenderId: "605815420607",
  appId: "1:605815420607:web:b250897728a92d28a4380a",
  measurementId: "G-PRK6FQSXM9"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
