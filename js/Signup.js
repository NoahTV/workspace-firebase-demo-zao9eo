var firebaseConfig = {
  apiKey: "AIzaSyCjRCnl-0ohz1MahXwZ7pnYNU0oaUWqgaA",
  authDomain: "grocerylist-290a6.firebaseapp.com",
  databaseURL: "https://grocerylist-290a6.firebaseio.com",
  projectId: "grocerylist-290a6",
  storageBucket: "grocerylist-290a6.appspot.com",
  messagingSenderId: "341204536159",
  appId: "1:341204536159:web:1b8576bf2ccfed115384ea",
  measurementId: "G-PS1ZDC8DKG"};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("Start");

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("Submit");
  var email = "Noahv.tv@gmail.com"
  var psw = "password"
  firbase.auth().createUserWithEmailAndPassword(email,psw).then(user =>{
    console.log("Success");
  }).catch(error=>{
    console.log(error.code);
    console.log(error.message);
  })
})