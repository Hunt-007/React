import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMaUzoqceWw96E1bpoQbqJy2huYY4H_C4",
  authDomain: "mitienda-db.firebaseapp.com",
  projectId: "mitienda-db",
  storageBucket: "mitienda-db.firebasestorage.app",
  messagingSenderId: "868680441310",
  appId: "1:868680441310:web:6a2242b4d46c4b0be8d14f",
};

export const app = initializeApp(firebaseConfig);
