import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0e2nDow6aC4LHGo54CTMavIqy3xsDckg",
  authDomain: "deal-finder-58a36.firebaseapp.com",
  projectId: "deal-finder-58a36",
  storageBucket: "deal-finder-58a36.firebasestorage.app",
  messagingSenderId: "76468103172",
  appId: "1:76468103172:web:d644fa56532589923dad51",
  measurementId: "G-GEXJL932VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export the app instance
export default app;