// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
  e.preventDefault();

  var data = $("form").serializeArray();
  console.log(data);
  var inputJson = {};
  for(var i = 0; i < data.length; i++) {
    var name = data[i] ["name"];
    var value = data[i] ["value"];

    inputJson[name] = value;
  }
  console.log(inputJson)

 firebase
    .firestore()
    .collection("surveyList")
    .add(inputJson);

  $("form")[0].reset();
});
// update the result in table
