// function fyrir þegar leikurinn loadast
function load() {
  let welcome = document.getElementById("message");
  welcome.innerText = "Welcome back, " + localStorage.getItem("username");

  // Sýnir núverandi wins, losses og draws 
  document.getElementById("win").innerHTML = wins;
  document.getElementById("lose").innerHTML = losses;
  document.getElementById("draw").innerHTML = draws;

  // Sýnir fyrirverandi stig með því að ná í það úr localstorage
  document.getElementById("prevWin").innerHTML = localStorage.getItem("prevWin");
  document.getElementById("prevLose").innerHTML = localStorage.getItem("prevLose");
  document.getElementById("prevDraw").innerHTML = localStorage.getItem("prevDraw");

  // Setur wins, losses og draws í localstorage
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
  localStorage.setItem("draws", draws);

  // Sýnir fyrirverandi win/loss/draw ratio
  document.getElementById("prev-winloss").innerText = "W/L/D Ratio: " + localStorage.getItem("prev-wld-ratio") + "%"; 
};


function game(choice) {
  computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  if (choice == computerChoice) {
      draws++;
      prevDraw++;
      let message = document.getElementById("msg").innerText = "Draw! The computer chose" + " " + computerChoice + ", You chose " + choice;
      localStorage.setItem("draws", draws);
      document.getElementById("draw").innerText = localStorage.getItem("draws");
  } else if (["RockScissors", "PaperRock", "ScissorsPaper"].indexOf(choice + computerChoice) != -1) {
    wins++;
    prevWin++;
    let message = document.getElementById("msg").innerText = "You won!! The computer chose" + " " + computerChoice + ", You chose " + choice;
    localStorage.setItem("wins", wins);
    document.getElementById("win").innerText = localStorage.getItem("wins");
  } else {
    losses++;
    prevLoss++;
    let message = document.getElementById("msg").innerText = "You lost! The computer chose" + " " + computerChoice + ", You chose " + choice;
    localStorage.setItem("losses", losses);
    document.getElementById("lose").innerText = localStorage.getItem("losses");
  }
};  

// Logout functionið
function logout(){
  location = 'index.html';
  localStorage.setItem("loginstatus", "loggedout");
};


// function sem uppfærir w/l/d ratioið á hverjum .200 sek / 2/10 sek
setInterval(function(){
  // Núveradni win/loss/draw ratio
  let total = wins + losses + draws;
  currratio = parseFloat((100 * wins) / total).toFixed(2);
  document.getElementById("curr-winloss").innerHTML = "W/L/D Ratio: " + currratio + "%";
  
  // Ef wins eru 0 sýna 0 sem win/loss/draw ratio í stað NaN
  if (localStorage.getItem("wins") === "0") {
    document.getElementById("curr-winloss").innerHTML = "W/L/D Ratio: " + "0" + "%";
  }
  
  // Ef seinni wins eru 0 sýna 0 sem win/loss/draw ratio í stað NaN
  if(localStorage.getItem("prevWin") === "0") {
    document.getElementById("prev-winloss").innerHTML = "W/L/D Ratio: " + "0" + "%";
  }
}, .200);


// function sem nær i stig úr síðasta leik
function prevScore(){
  localStorage.setItem("prevWin", prevWin);
  localStorage.setItem("prevLose", prevLoss);
  localStorage.setItem("prevDraw", prevDraw);
  
  // Fyrirverandi win/loss/draw ratio
  let prevtotal = prevWin + prevLoss + prevDraw;
  prevratio = parseFloat((100 * prevWin) / prevtotal).toFixed(2);
  localStorage.setItem("prev-wld-ratio", prevratio);
};


var wins = 0;
var losses = 0;
var draws = 0;

var prevWin = 0;
var prevLoss = 0;
var prevDraw = 0;

let logoutbtn = document.getElementById("logout-btn");

// Ef loginstatus er ekki loggedin
if (localStorage.getItem("loginstatus") != "loggedin"){
  location = 'index.html';
};

// Ef það er ýtt á logout takkan runnar það logout functionið
logoutbtn.addEventListener("click", logout);

// Þegar síðan loadast runnar það load functionið
window.onload = load();

// Þegar það er reloadað síðuna runnar það prevScore functionið
window.onbeforeunload = prevScore;