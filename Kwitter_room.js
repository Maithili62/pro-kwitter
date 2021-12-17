//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAvoCYKmarjKR-en_avpiquNnEs4bwF1Ms",
    authDomain: "kwitter-e2458.firebaseapp.com",
    projectId: "kwitter-e2458",
    storageBucket: "kwitter-e2458.appspot.com",
    messagingSenderId: "203812118645",
    appId: "1:203812118645:web:7d5c424d833739ade1183c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "! ";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();


function addroom ()
{
room_name = document.getElementById("room_name").ariaValueMax;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
localStorage.setItem("room name",room_name);
window.location = "Kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}