(function(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDOCa5Of1-1g8fYG5sT4MP6OycL96_ZBJE",
    authDomain: "recipebookdatabase.firebaseapp.com",
    databaseURL: "https://recipebookdatabase.firebaseio.com",
    projectId: "recipebookdatabase",
    storageBucket: "recipebookdatabase.appspot.com",
    messagingSenderId: "291820315274"
  };
  firebase.initializeApp(config);
  //Get Elements

  const preObject = document.getElementById('object');
  const ulList = document.getElementById('IngredientID');
  const steps = document.getElementById('StepsID');
  const title = document.getElementById('TitleID');
  //Get Reference
  const dbRefObject = firebase.database().ref().child('Recipe');
  const dbRefList = dbRefObject.child('Ingredients');

/*  dbRefObject.on('value', snap => {
    preObject.innerText =JSON.stringify(snap.val(), null, 3);
  });*/

  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    //li.id =snap.key;
    ulList.appendChild(li);
  });
}());

function writeUserData(name, email, imageUrl) {
  console.log("test");
  var userId = guid();
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
        var firebaseRef = new Firebase('https://recipebookdatabase.firebaseio.com');
//saveToFirebase(email);
}