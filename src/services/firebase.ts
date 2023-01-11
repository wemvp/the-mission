import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";

// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBr4YrOabkW4kHUV1p5KhnXGPfmN5hiloc",
  authDomain: "the-mission-5ad40.firebaseapp.com",
  projectId: "the-mission-5ad40",
  storageBucket: "the-mission-5ad40.appspot.com",
  messagingSenderId: "975367053018",
  appId: "1:975367053018:web:4713cd684b53735d16cfe3",
  measurementId: "G-LN3TFL2TWS",
};

export const app = initializeApp(firebaseConfig);
export const fbAuth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
