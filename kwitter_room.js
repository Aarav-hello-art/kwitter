var firebaseConfig = {
      apiKey: "AIzaSyDSNdPjNo_7M5VMbQyw7_JoSvlu2m-8BO8",
      authDomain: "kwitter-e96d7.firebaseapp.com",
      databaseURL: "https://kwitter-e96d7-default-rtdb.firebaseio.com",
      projectId: "kwitter-e96d7",
      storageBucket: "kwitter-e96d7.appspot.com",
      messagingSenderId: "530698927065",
      appId: "1:530698927065:web:04c6d2725cd1a0332e77c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

//GETTING USERNAME FROM THE LOCAL STORAGE

var user_name = localStorage.getItem("username")
document.getElementById("welcomeuser").innerHTML = "Welcome "+user_name

function addroom() {
      var room_name = document.getElementById("roomname").value 
      firebase.database().ref("/").child(room_name).update({
      Status : "Room name added"
      })  
      
      localStorage.setItem("roomname",room_name)
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location = "index.html"
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row = `<div id=${Room_names} class="room_name" onclick="gotoroom(this.id)">${Room_names}</div><hr>`
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function gotoroom(room) {
    localStorage.setItem("roomname",room)
    window.location = "kwitter_page.html"  
}