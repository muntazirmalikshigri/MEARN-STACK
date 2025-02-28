// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword, // Correct function for sign-up
//   signInWithEmailAndPassword,
  
// } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD81wDP1Z8VZlqCUH20YrziNq-74mAj2Og",
//   authDomain: "chatapp-dafb8.firebaseapp.com",
//   projectId: "chatapp-dafb8",
//   storageBucket: "chatapp-dafb8.firebasestorage.app",
//   messagingSenderId: "840252080976",
//   appId: "1:840252080976:web:ba881ad54add7fb1d2a255",
//   measurementId: "G-6XPRSJN2LB",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log("app=>", app);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// // Get DOM elements
// const signup_email = document.getElementById("signup_email");
// const signup_password = document.getElementById("signup_password");
// const signup_btn = document.getElementById("signup_btn");
// const signin_btn = document.querySelector('signin_btn');
// const auth_conatainer = document.querySelector('auth_container');
// const user_container = document.querySelector("user_container");
// const signin_password = document.querySelector('#signin_password');
// const signin_email = Document.getElementById("signin_email");



// const user_email = document.getElementById("user_email");
// const logout_btn = document.getElementById("logout_btn");


// // Add event listener to sign-up button
// signup_btn.addEventListener("click", createUserAccount);
// signin_btn.addEventListener("click",signIn)

// // Auth state observer
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User logged in");
//     const uid = user.uid;
//     auth_conatainer.style.display = 'none';
//     user_container.style.display = 'block';
//     user_email.innerText = user_email;

//     console.log("User UID=>", uid);
//   } else {
//     auth_conatainer.style.display = 'block';
//     user_container.style.display = 'auth';
//     user_email.innerText = user_email;
    
//     console.log("User not logged in");
//   }
// });
// // Function to create a new user account
// function createUserAccount() {
//   const email = signup_email.value;
//   const password = signup_password.value;

//   // Use createUserWithEmailAndPassword for sign-up
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up successfully
//       const user = userCredential.user;
//       console.log("User created=>", user);
//       alert("User created successfully!");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error=>", errorMessage);
//       alert(errorMessage); // Show error message to the user
//     });
// };

// function signIn(){
//   const email = signin_emai.value;
//   const password = signin_password.value
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   })
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword, // Correct function for sign-up
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD81wDP1Z8VZlqCUH20YrziNq-74mAj2Og",
  authDomain: "chatapp-dafb8.firebaseapp.com",
  projectId: "chatapp-dafb8",
  storageBucket: "chatapp-dafb8.firebasestorage.app",
  messagingSenderId: "840252080976",
  appId: "1:840252080976:web:ba881ad54add7fb1d2a255",
  measurementId: "G-6XPRSJN2LB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("app=>", app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get DOM elements
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_btn = document.getElementById("signup_btn");
const signin_btn = document.querySelector('#signin_btn');
const auth_container = document.querySelector('#auth_container');
const user_container = document.querySelector("#user_container");
const signin_password = document.querySelector('#signin_password');
const signin_email = document.getElementById("signin_email");

const user_email = document.getElementById("user_email");
const logout_btn = document.getElementById("logout_btn");

// Add event listener to sign-up button
signup_btn.addEventListener("click", createUserAccount);
signin_btn.addEventListener("click", signIn);
logout_btn.addEventListener('click',signOutUser);

// Auth state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in");
    const uid = user.uid;
    auth_container.style.display = 'none';
    user_container.style.display = 'block';
    user_email.innerText = user.email;

    console.log("User UID=>", uid);
  } else {
    auth_container.style.display = 'block';
    user_container.style.display = 'none';
    user_email.innerText = '';

    console.log("User not logged in");
  }
});

// Function to create a new user account
function createUserAccount() {
  const email = signup_email.value;
  const password = signup_password.value;

  // Use createUserWithEmailAndPassword for sign-up
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("User created=>", user);
      alert("User created successfully!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error=>", errorMessage);
      alert(errorMessage); // Show error message to the user
    });
}

function signIn() {
  const email = signin_email.value;
  const password = signin_password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in=>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error=>", errorMessage);
      alert(errorMessage); // Show error message to the user
    });
}

function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful
      console.log("User signed out");
      // alert("User signed out successfully!");
    })
    .catch((error) => {
      // An error occurred
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error=>", errorMessage);
      alert(errorMessage); // Show error message to the user
    });
}

