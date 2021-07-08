// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAx7f9DnIPzmHQy7LnmHBoIeoFUeqzIY2E",
  authDomain: "contactform-3eb3d.firebaseapp.com",
  projectId: "contactform-3eb3d",
  storageBucket: "contactform-3eb3d.appspot.com",
  messagingSenderId: "810963825748",
  appId: "1:810963825748:web:627497b01da7f4e0e6e9c1",
  databaseURL: "https://contactform-3eb3d-default-rtdb.europe-west1.firebasedatabase.app/"
};
firebase.initializeApp(config);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');


//SHOW DATA
messagesRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      //var childData = childSnapshot.val();
      //console.log(childSnapshot.val());
    });
});


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var date = getInputVal('date');
  var operator = getInputVal('operator');
  var patient_name = getInputVal('patient_name');
  var patient_date_of_birth = getInputVal('patient_date_of_birth');
  var basic_department = getInputVal('basic_department');
  var pvk_usg = getInputVal('pvk_usg');
  var cvk = getInputVal('cvk');
  var arterial_kateter = getInputVal('arterial_kateter');
  var epiduralny_kateter = getInputVal('epiduralny_kateter');
  var blokada_perifer_nerv = getInputVal('blokada_perifer_nerv');
  var ciel_bpn = getInputVal('ciel_bpn');
  var komplikacie = getInputVal('komplikacie');
  var patient_feedback = getInputVal('patient_feedback');
  var poznamky = getInputVal('poznamky');





  // Save message
  saveMessage(date, operator, patient_name, patient_date_of_birth, basic_department, pvk_usg, cvk, arterial_kateter, epiduralny_kateter, blokada_perifer_nerv, ciel_bpn, komplikacie, patient_feedback, poznamky);


  //alert('Message has been saved')

  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  //document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(date, operator, patient_name, patient_date_of_birth, basic_department, pvk_usg, cvk, arterial_kateter, epiduralny_kateter, blokada_perifer_nerv, ciel_bpn, komplikacie, patient_feedback, poznamky){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    date: date,
    operator: operator,
    patient_name: patient_name,
    patient_date_of_birth: patient_date_of_birth,
    basic_department: basic_department,
    pvk_usg: pvk_usg,
    cvk: cvk,
    arterial_kateter: arterial_kateter,
    epiduralny_kateter: epiduralny_kateter,
    blokada_perifer_nerv: blokada_perifer_nerv,
    ciel_bpn: ciel_bpn,
    komplikacie: komplikacie,
    patient_feedback: patient_feedback,
    poznamky: poznamky

  });
}
