function login(){
    userName=document.getElementById("user_name").value;
    localStorage.setItem("name_user",userName);
    window.location="kwitter_room.html";
}