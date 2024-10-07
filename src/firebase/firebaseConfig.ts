import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
    apiKey: "AIzaSyAVPTnIN2mwkKNhSLzyVwGlywmMdSAitBQ",
    authDomain: "burguercatback.firebaseapp.com",
    databaseURL: "https://burguercatback-default-rtdb.firebaseio.com/",
    projectId: "burguercatback",
    storageBucket: "burguercatback.appspot.com",
    messagingSenderId: "145802357683",
    appId: "1:145802357683:web:cda02210f4139d3ba979c6",
    measurementId: "G-3Q280DG9KY",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const auth = getAuth(app);

export { app, db, firebaseConfig, auth };
