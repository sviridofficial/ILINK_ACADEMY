import {initializeApp} from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANc3S7hyhB9bH6Py6ViRB_lQQdBNNKln0",
    authDomain: "ilinkacademy-2022.firebaseapp.com",
    projectId: "ilinkacademy-2022",
    storageBucket: "ilinkacademy-2022.appspot.com",
    messagingSenderId: "543248197105",
    appId: "1:543248197105:web:4838123f954381d6a01050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export default database;

