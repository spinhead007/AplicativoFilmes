// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBPtPFMauvYHPfdQre2EhwSQijIxSlGRzM",
  authDomain: "mobile2024-719a6.firebaseapp.com",
  databaseURL: "https://mobile2024-719a6-default-rtdb.firebaseio.com",
  projectId: "mobile2024-719a6",
  storageBucket: "mobile2024-719a6.appspot.com",
  messagingSenderId: "553534760603",
  appId: "1:553534760603:web:6694d7d7c8f7d7d314883e",
  measurementId: "G-H3Q04HSQPF"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o serviço de autenticação e exporte
const auth = getAuth(app);
export { auth };
