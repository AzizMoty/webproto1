import { 
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
  getDocs,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { User } from '../types';
import { reportError } from '../utils/errorReporting';

export const createUserProfile = async (userId: string, userData: Partial<User>) => {
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      wishlist: [],
      searchHistory: [],
      viewedProducts: []
    });
    return userRef;
  } catch (error) {
    if (error instanceof Error) {
      reportError(error, {
        level: 'error',
        component: 'FirebaseService',
        function: 'createUserProfile',
        userId
      });
    }
    throw error;
  }
};

export const getUserProfile = async (userId: string): Promise<User | null> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as User) : null;
  } catch (error) {
    if (error instanceof Error) {
      reportError(error, {
        level: 'error',
        component: 'FirebaseService',
        function: 'getUserProfile',
        userId
      });
    }
    throw error;
  }
};