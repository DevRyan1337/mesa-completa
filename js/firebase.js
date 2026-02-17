<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyAmituB9652__9Asd3kVM2VJFTT-4sCWvE",
  authDomain: "mesa-completa.firebaseapp.com",
  projectId: "mesa-completa",
  storageBucket: "mesa-completa.firebasestorage.app",
  messagingSenderId: "352211050825",
  appId: "1:352211050825:web:1e43d99d60406700c77a98"
};


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();
</script>
