
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcC_PlP8yQKR2sYPX9yVW_EKQXUk1eaYc",
    authDomain: "fir-eindproject.firebaseapp.com",
    projectId: "fir-eindproject",
    storageBucket: "fir-eindproject.appspot.com",
    messagingSenderId: "168255899338",
    appId: "1:168255899338:web:37c53c51f0fb3302679633",
    measurementId: "G-LTHZTQDW5K"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
