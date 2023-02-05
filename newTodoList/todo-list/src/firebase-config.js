import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDGNzrC-rvx6pzQY8CBU1BQJFbRlcbsPNI",
  authDomain: "todolist-abd05.firebaseapp.com",
  projectId: "todolist-abd05",
  storageBucket: "todolist-abd05.appspot.com",
  messagingSenderId: "658661299271",
  appId: "1:658661299271:web:8b8537ca31265a53ff0d62",
  measurementId: "G-VGZ19D26DL"
};
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);