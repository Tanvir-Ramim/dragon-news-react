// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAre2sy99Wopi5lPpqvmB4pLMSuKRvLUN0",
  authDomain: "dragon-news-react-7b301.firebaseapp.com",
  projectId: "dragon-news-react-7b301",
  storageBucket: "dragon-news-react-7b301.appspot.com",
  messagingSenderId: "985716428662",
  appId: "1:985716428662:web:f24a2cc5a432cc5b9ff457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth