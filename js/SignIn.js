var firebaseConfig = {
  apiKey: "AIzaSyCjRCnl-0ohz1MahXwZ7pnYNU0oaUWqgaA",
  authDomain: "grocerylist-290a6.firebaseapp.com",
  databaseURL: "https://grocerylist-290a6.firebaseio.com",
  projectId: "grocerylist-290a6",
  storageBucket: "grocerylist-290a6.appspot.com",
  messagingSenderId: "341204536159",
  appId: "1:341204536159:web:1b8576bf2ccfed115384ea",
  measurementId: "G-PS1ZDC8DKG"};

firebase.initializeApp(firebaseConfig);

$("#Login").submit(function(e){
  e.preventDefault();

  // get the username(email) and password from the form 
  var email = "Noahv.tv@gmail.com";
  var password = "password";

  // sign in 
  firebase.auth().signInWithEmailAndPassword(email,password).then(success=>{
    console.log("Login in successfully");
  }).catch(error=>{
    var errorMessage = error.message;
    console.log(errorMessage);

  });





});