// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeddI436wufmr-dI1kw6hE3fuRuyKEKaA",
    authDomain: "the-dragon-news-client-bac3d.firebaseapp.com",
    projectId: "the-dragon-news-client-bac3d",
    storageBucket: "the-dragon-news-client-bac3d.appspot.com",
    messagingSenderId: "543743031291",
    appId: "1:543743031291:web:b0e8cb233797542b55fd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;