import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDtebT_HCNVUmyuGHiu-k-yC4yY3lBeKk0",
    authDomain: "personitasdb.firebaseapp.com",
    databaseURL: "https://personitasdb-default-rtdb.firebaseio.com",
    projectId: "personitasdb",
    storageBucket: "personitasdb.appspot.com",
    messagingSenderId: "30907953556",
    appId: "1:30907953556:web:817ca6c8b4a4efff5f5f81",
    measurementId: "G-910V81MTGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)