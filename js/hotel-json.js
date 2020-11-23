var firebaseConfig = {
  apiKey: "AIzaSyCjRCnl-0ohz1MahXwZ7pnYNU0oaUWqgaA",
  authDomain: "grocerylist-290a6.firebaseapp.com",
  databaseURL: "https://grocerylist-290a6.firebaseio.com",
  projectId: "grocerylist-290a6",
  storageBucket: "grocerylist-290a6.appspot.com",
  messagingSenderId: "341204536159",
  appId: "1:341204536159:web:1b8576bf2ccfed115384ea",
  measurementId: "G-PS1ZDC8DKG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /*save the data to database */
  firebase
    .firestore()
    .collection("hotelList")
    .add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});
