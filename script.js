import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBzBmd5piNiNJaZ9orSR_NJVjiRIhZueQ4",
    authDomain: "saad-aslam-tech.firebaseapp.com",
    projectId: "saad-aslam-tech",
    storageBucket: "saad-aslam-tech.firebasestorage.app",
    messagingSenderId: "341654487346",
    appId: "1:341654487346:web:e2750ecc996f3b1ee2572b"
};

const app = initializeApp(firebaseConfig);
window.createYourAccount = () => {
    alert("Ye chala")
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("Accouny Create Hochuka")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("Accouny Create NHi hoa")

        });
}
