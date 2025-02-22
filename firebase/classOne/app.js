
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth , onAuthStateChanged , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // TODO: Add SDKimports for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD81wDP1Z8VZlqCUH20YrziNq-74mAj2Og",
    authDomain: "chatapp-dafb8.firebaseapp.com",
    projectId: "chatapp-dafb8",
    storageBucket: "chatapp-dafb8.firebasestorage.app",
    messagingSenderId: "840252080976",
    appId: "1:840252080976:web:ba881ad54add7fb1d2a255",
    measurementId: "G-6XPRSJN2LB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("app=>",app);
  const analytics = getAnalytics(app);

  
  const auth = getAuth(app);


  const signup_email = document.getElementById("signup_email");
  const signup_password = document.getElementById("signup_password");
  const signup_btn = document.getElementById("signup_btn");

  signup_btn.addEventListener("click",createUserAccount)


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User logged in");
      const uid = user.uid;
      // ...
    } else {
        console.log("User not logged in");
    
    }
  });
  
  function createUserAccount(){
    // console.log("email=>",signup_email.value);
    // console.log("password=>",signup_password.value);
    signInWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User=>",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }
