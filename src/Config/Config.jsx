import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTUlmDXc1rSakpP5GejhCGLXVblZPZ2HY",
  authDomain: "laugth-tale.firebaseapp.com",
  projectId: "laugth-tale",
  storageBucket: "laugth-tale.appspot.com",
  messagingSenderId: "1041039833217",
  appId: "1:1041039833217:web:d515089de00ec3c2367580",
  measurementId: "G-ZEBXCBRTJN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);