// js/firebase-init.js
const firebaseConfig = {
  apiKey: "AIzaSyAmituB9652__9Asd3kVM2VJFTT-4sCWvE",
  authDomain: "mesa-completa.firebaseapp.com",
  projectId: "mesa-completa",
  storageBucket: "mesa-completa.firebasestorage.app",
  messagingSenderId: "352211050825",
  appId: "1:352211050825:web:1e43d99d60406700c77a98"
};

firebase.initializeApp(firebaseConfig);

// Deixa global para usar em qualquer página
window.auth = firebase.auth();
window.db = firebase.firestore();
