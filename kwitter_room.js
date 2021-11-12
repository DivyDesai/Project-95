var firebaseConfig = {
    apiKey: "AIzaSyBVDgE5x10dMhffZo3YcdKr2vZZsJZGmMA",
    authDomain: "project-kwitter-c49fc.firebaseapp.com",
    databaseURL: "https://project-kwitter-c49fc-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-c49fc",
    storageBucket: "project-kwitter-c49fc.appspot.com",
    messagingSenderId: "214655818540",
    appId: "1:214655818540:web:29a30087ecc416f17d2a89"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("name_user");
document.getElementById("username").innerHTML="Welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Roomname is : "+Room_names);
        row="<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
        document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom(){
      roomname=document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("roomname",name);
 window.location="kwitter_page.html";
}