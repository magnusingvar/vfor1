// function sem athugar hvort input sé tómt, ef ekki þá setur það inputin í localstorage
function store() {
    if(username.value == "" && password.value == ""){
      message.innerText = "Username and password can't be empty!"
    } else {
      localStorage.setItem('username', username.value);
      localStorage.setItem('password', password.value);
    }
};

// function sem atughar hvort inputið sé það sama og sem var registerað
function check() {
    var storedName = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    var userUsername = document.getElementById('userName');
    var userPassword = document.getElementById('userPw');
    if(userUsername.value == "" && userPassword.value == ""){
      message.innerText = "Username and password can't be empty!"
      return false
    }

    if(userUsername.value == storedName && userPassword.value == storedPassword) {
      location = 'game.html';
      localStorage.setItem("loginstatus", "loggedin");
      return true
    }else {
      message.innerText = "Usename or password is incorrect!"
    }
};


var username = document.getElementById('name');
var password = document.getElementById('pw');
let message = document.getElementById("error");

// setur loginstatusið sjálfkrafa í loggedout
localStorage.setItem("loginstatus", "loggedout");