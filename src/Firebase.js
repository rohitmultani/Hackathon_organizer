
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCLktpZVZj-V2hyajARhVpnJECiDYzDYM0",
  authDomain: "hackathon-543bc.firebaseapp.com",
  projectId: "hackathon-543bc",
  storageBucket: "hackathon-543bc.appspot.com",
  messagingSenderId: "317357552451",
  appId: "1:317357552451:web:d3e6303a1f958d617ab5f6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app)

export {storage,db}