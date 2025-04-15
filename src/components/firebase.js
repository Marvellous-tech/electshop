// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAcWGpzSeTn302PMbbf4jJZ082iooR2S9M",
//   authDomain: "bigbirdfarm-9a0c6.firebaseapp.com",
//   projectId: "bigbirdfarm-9a0c6",
//   storageBucket: "bigbirdfarm-9a0c6.firebasestorage.app",
//   messagingSenderId: "465385254514",
//   appId: "1:465385254514:web:1bedaf3560cdcdc0f85ceb",
//   measurementId: "G-VLNBPGCJTN"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { app, db, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAcWGpzSeTn302PMbbf4jJZ082iooR2S9M",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bigbirdfarm-9a0c6.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bigbirdfarm-9a0c6",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bigbirdfarm-9a0c6.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "465385254514",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:465385254514:web:1bedaf3560cdcdc0f85ceb",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-VLNBPGCJTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
