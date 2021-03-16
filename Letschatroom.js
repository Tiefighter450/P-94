var firebaseConfig = {
      apiKey: "AIzaSyBJgRbwCCBCvYivVksdQvRkCwKEoMCof7I",
      authDomain: "me-chat-ff80a.firebaseapp.com",
      databaseURL: "https://me-chat-ff80a-default-rtdb.firebaseio.com",
      projectId: "me-chat-ff80a",
      storageBucket: "me-chat-ff80a.appspot.com",
      messagingSenderId: "858101402528",
      appId: "1:858101402528:web:10a933a2906d74525cb2c5",
      measurementId: "G-9EL1LLHVQQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html"
}