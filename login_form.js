var username;
var userpass;
function react(){
  username = document.getElementById("user");
  userpass = document.getElementById("pass");
  parent.location="response.html";
  window.location.href="response.html";
  location.href = "response.html";
 if(username.value == "" && userpass.value==""){
    alert('fill then form first');
  }
  else if(username.value == ""){
    alert('fill then username first');
  }
  else if( userpass.value==""){
    alert('fill then passcode first');
  }
  else{
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if(pass.value.length < 8){ // checks the password value length
    alert('You have entered less than 8 characters for password');
  }
  else if (!filter.test(username.value)) {
     alert("invalid username ")
  }
  else{
   
    if (typeof(Storage) !== "undefined")  {
     localStorage.setItem('username',username.value);
      sessionStorage.setItem('password',userpass.value);
      document.getElementById("local").innerHTML = username.value/*localStorage.getItem("localData");*/
      document.getElementById("session").innerHTML =userpass.value/*sessionStorage.getItem("sessionData");*/
    }
    else {
      document.getElementById("result").innerHTML = "Sorry, your brow ser does not support Web Storage...";
    }
  } 
}
}
function load(){
  document.getElementById("name").innerHTML = localStorage.getItem("username");
  document.getElementById("password").innerHTML =sessionStorage.getItem("password");
}	

