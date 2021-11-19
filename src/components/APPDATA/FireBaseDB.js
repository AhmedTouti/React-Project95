

 import {initializeApp} from 'firebase/app'
 import {getFirestore} from '@firebase/firestore'
 import {getAuth} from 'firebase/auth'
 import { collection } from 'firebase/firestore'

  
 const firebaseConfig = {
     apiKey: "AIzaSyD-Em8DQrHWldQZfQWwFc1EW6Po7NVD6aE",
     authDomain: "gym-95.firebaseapp.com",
     projectId: "gym-95",
     storageBucket: "gym-95.appspot.com",
     messagingSenderId: "663181557453",
     appId: "1:663181557453:web:bdcaeb87a9458892757384"
 };
 
 const app=initializeApp(firebaseConfig);
 
 
 
 export const db = getFirestore(app);
 export   const usersCollectionRef = collection(db, "USERS");
 export   const blogCollectionRef = collection(db, "BLOGS");

 export const auth =getAuth(app);

