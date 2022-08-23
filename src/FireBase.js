import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4XxEpqP-YrxyqKpHCCSmzUE9CpYUCZlw",
    authDomain: "hospital-project-1fa82.firebaseapp.com",
    projectId: "hospital-project-1fa82",
    storageBucket: "hospital-project-1fa82.appspot.com",
    messagingSenderId: "509835616094",
    appId: "1:509835616094:web:9c4a69d6b4bc4562caf9cf",
    measurementId: "G-BB22KVSP9C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);