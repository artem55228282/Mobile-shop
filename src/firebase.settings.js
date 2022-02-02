// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp9z8nyfO4zGTL7u9cd7HF3QeRrB3Og-Q",
  authDomain: "vue-js-shop.firebaseapp.com",
  projectId: "vue-js-shop",
  storageBucket: "vue-js-shop.appspot.com",
  messagingSenderId: "835927727678",
  appId: "1:835927727678:web:e38e700fa1dd30e4a13b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);