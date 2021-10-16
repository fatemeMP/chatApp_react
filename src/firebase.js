import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBe2M6XWj2S8Mtt3_jChwmeKm5Kd2z3waU",
    authDomain: "mpbot-424b8.firebaseapp.com",
    projectId: "mpbot-424b8",
    storageBucket: "mpbot-424b8.appspot.com",
    messagingSenderId: "153223439418",
    appId: "1:153223439418:web:96f53f5186067c88fd0103"
  }).auth();