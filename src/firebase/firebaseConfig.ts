import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAYqAOrWmToFQ4d5O0iq7BikehhDhQ2wmI",
    authDomain: "burguercat-5d2ae.firebaseapp.com",
    databaseURL: "https://burguercat-5d2ae-default-rtdb.firebaseio.com/",  
    projectId: "burguercat-5d2ae",
    storageBucket: "burguercat-5d2ae.appspot.com",
    messagingSenderId: "232988392657",
    appId: "1:232988392657:web:bab0eb5ba3e9b1580f99f0",
    measurementId: "G-CKE38YPBN5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, firebaseConfig };
