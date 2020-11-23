// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
e.preventDefault();

var data = $("form").serializeArray();
console.log(data);

var inputJson = {};
for(var i = 0; i < data.length; i++) {
  var name = data[i] ("comm");
  var value = data[i] ("value");

  inputJson(name) = value;
}
console.log(inputJson)

});
// update the result in table
