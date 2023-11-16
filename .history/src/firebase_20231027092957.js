import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBftJMuA98YUQ5bU462A3hg8DemoNeu8Go",
  authDomain: "instagram-clone-37b20.firebaseapp.com",
  projectId: "instagram-clone-37b20",
  storageBucket: "instagram-clone-37b20.appspot.com",
  messagingSenderId: "123629197981",
  appId: "1:123629197981:web:8bf1457306daf6b0c7d274"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();