var username;
var userpass;
function react(){
parent.location='task1.1.html';
username = document.getElementById("user");
userpass = document.getElementById("pass");
if(username.value == null && userpass.value==null){
  alert('fill then form first');
}
  else{
if (typeof(Storage) !== "undefined") {
  localStorage.setItem('username',username.value);
  sessionStorage.setItem('password',userpass.value);
  document.getElementById("local").innerHTML = username.value/*localStorage.getItem("localData");*/
    document.getElementById("session").innerHTML =userpass.value/*sessionStorage.getItem("sessionData");*/
} else {
  document.getElementById("result").innerHTML = "Sorry, your brow ser does not support Web Storage...";
 
}}
}
function load(){
 document.getElementById("nm").innerHTML = localStorage.getItem("username");
    document.getElementById("ps").innerHTML =sessionStorage.getItem("password");
}	
