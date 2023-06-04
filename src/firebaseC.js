
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { initializeApp } from 'firebase-admin/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDII-PWU063lY0ib4vxqniRyaYF1GBglWA",
  authDomain: "sistema-ab9d8.firebaseapp.com",
  projectId: "sistema-ab9d8",
  storageBucket: "sistema-ab9d8.appspot.com",
  messagingSenderId: "35672771321",
  appId: "1:35672771321:web:bd758758b55696a920b028",
  measurementId: "G-2LFHSPYPFM"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





const auth = getAuth(app);
export function FbRegistrar(email, password){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
  })
  
}

export  function FirebaseLogin(email, password) {
    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            
        })
    } catch (e) {
        return false;
    }
 

   //credenciales.user
   return true;
}