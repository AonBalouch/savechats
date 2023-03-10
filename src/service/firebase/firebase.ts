// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDcayId5zGsXboUszowwtoOUEah2_yLU3c',
//   authDomain: 'chatgpt-message.firebaseapp.com',
//   projectId: 'chatgpt-message',
//   storageBucket: 'chatgpt-message.appspot.com',
//   messagingSenderId: '855154140569',
//   appId: '1:855154140569:web:cfd3736cd14bc4b4ef9f08',
//   measurementId: 'G-F8WDEEXHW6'
// };

const firebaseConfig = {
  apiKey: "AIzaSyBz7oHN8AyCAdgVuqmLGvNk6sxxSDoiBhE",
  authDomain: "mychat-9bb1a.firebaseapp.com",
  databaseURL: "https://mychat-9bb1a-default-rtdb.firebaseio.com",
  projectId: "mychat-9bb1a",
  storageBucket: "mychat-9bb1a.appspot.com",
  messagingSenderId: "891339279571",
  appId: "1:891339279571:web:e9647238f31bf59f485826",
  measurementId: "G-PXT6LD1C02"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
