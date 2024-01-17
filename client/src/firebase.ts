import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAIhtFZhSIzNdhUy4TPDwFElPfg2PV-sSo",
	authDomain: "video-3c281.firebaseapp.com",
	projectId: "video-3c281",
	storageBucket: "video-3c281.appspot.com",
	messagingSenderId: "777917231805",
	appId: "1:777917231805:web:692835492299373ce03dd4",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
