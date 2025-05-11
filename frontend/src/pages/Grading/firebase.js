// Firebase core imports
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyDgyC6kgbWzNd3D6t5cNh1Imdr6PwEwP54',
  authDomain: 'tsa-grade.firebaseapp.com',
  databaseURL: 'https://tsa-grade-default-rtdb.firebaseio.com/',
  projectId: 'tsa-grade',
  storageBucket: 'tsa-grade.appspot.com',
  messagingSenderId: '264858604110',
  appId: '1:264858604110:web:171541eb49cd7e194aa91f',
  measurementId: 'G-8H9Y1N333R'
};

// Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export the Realtime Database instance as 'db'
export const db = getDatabase(app);
