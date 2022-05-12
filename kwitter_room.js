      // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCqlZFrruoNE3qxPuheEzJDBOR-Y-ocRkc",
      authDomain: "kwitter-3f080.firebaseapp.com",
      databaseURL: "https://kwitter-3f080-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f080",
      storageBucket: "kwitter-3f080.appspot.com",
      messagingSenderId: "362088038829",
      appId: "1:362088038829:web:2a7db67e331cc358626124"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"
      });
        
      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html"
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_names - " + Room_names)
       row = "<div class='room_name'  id= " + Room_names +" onclick='redirecttoroomname(this.id)'>#" + Room_names +"</div> <hr>     "
       document.getElementById("output").innerHTML  += row
      
      });});}
getData();

function redirecttoroomname(name)
{
  console.log(name)
  localStorage.setItem("room_name",name)

  window.location - "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}