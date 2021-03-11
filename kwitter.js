function login() {
       var user = document.getElementById("userinput").value
       localStorage.setItem("username",user)
       window.location = "kwitter_room.html"
}