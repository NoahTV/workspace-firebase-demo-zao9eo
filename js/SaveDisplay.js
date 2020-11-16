// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
  e.printDefault();
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputSurvey = {};
  for (var i = 0; i < inputdata.length; i++) {
    var choice = inputdata[i]["choice"];
    var comm = inputdata[i]["comm"];
    inputSurvey[chioce] = comm;
  }
});
// update the result in table
