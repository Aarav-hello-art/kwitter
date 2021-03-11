//YOUR FIREBASE LINKS
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
   //CODE FOR GETTING USERNAME AND ROOMNAME FORM USER NAME FROM LOCAL STORAGE
   var user_name = localStorage.getItem("username")
   var room_name = localStorage.getItem("roomname")

   function send() {
         message = document.getElementById("msg").value
         firebase.database().ref(room_name).push({
               USER : user_name,
               MESSAGE : message,
               LIKES : 0
         });
         document.getElementById("msg").value = ""
   }

   function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location = "index.html"
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id)
    console.log(message_data)

    username = message_data["USER"]
    usertag = `<h4>${username}</h4>`

    msg = message_data["MESSAGE"]
    messagetag = `<h5>${msg}</h5>`

    likes = message_data["LIKES"]
    likestag = `<button id=${firebase_message_id} onclick="updatelike(this.id
      )" type="button" value=${likes} class="btn btn-danger"><span class= "glyphicon glyphicon-heart-empty" > Likes : ${likes}</span></button>`
      document.getElementById("output").innerHTML += usertag+messagetag+likestag+`<hr>` 
//End code
      } });  }); }
getData();

function updatelike(buttonid) {
      getlikes = document.getElementById(buttonid).value
      updatedlikes = Number(getlikes)+1
      firebase.database().ref(room_name).child(buttonid).update({
            LIKES : updatedlikes
      })
}


