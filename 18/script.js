function checkLetter() {
    if(testedLetters.includes(htmlLetterInput.value)){
        htmlMessage.textContent = "Þessi stafur hefur verið prufaður";
        htmlLetterInput.value = "";
    }else{
        htmlMessage.innerHTML = "";
        testedLetters.push(htmlLetterInput.value);
        testedLetters.sort();
        tries--
    }
};


function doubleLetter() {
    if(testedLetters.includes(htmlLetterInput) >= 2){
        htmlMessage.innerText = "";
        tries+=2;
    }
};


function wrongLetter(){
    wrongLetters.push(htmlLetterInput.value);
    wrongLetters.sort();
    displayWrongLetters = wrongLetters.join(" ");
    htmlWrongLetters.textContent = displayWrongLetters;
    htmlLetterInput.value = "";
};


function includes(){
    if(randomWord.includes(htmlLetterInput.value)){
        for(let i=0;i<randomWord.length; i++){
            if(randomWord[i] === htmlLetterInput.value){
                hiddenWord[i] = htmlLetterInput.value;
                htmlMessage.textContent = "";
            }
            if(i===hiddenWord.length-1){
                displayHiddenWord = hiddenWord.join(" ")
                htmlHiddenWord.textContent = displayHiddenWord;
                htmlLetterInput.value = "";
                htmlMessage.textContent = "";
            }
        }
    }
    if ( hiddenWord.includes("_") < 1){
        win.innerHTML = "You guessed the word!";
        htmlMessage.remove()
    }
};


function triesLeft(){
    if(tries === 1){
        htmlMessage.textContent = "You lost! the word was" + " " + randomWord;
        document.getElementById("letter").disabled = true;
    }
};


let tries = 8;

let htmlHiddenWord = document.getElementById("hidden");
let htmlMessage = document.getElementById("message");
let htmlLetterInput = document.getElementById("letter");
let htmlWrongLetters = document.getElementById("wrongLetters");
let win = document.getElementById("win");

let displayHiddenWord = "";
let displayWrongLetters = "";

let words = " ";

let randomNumber = 0;
let randomWord = 0;

let hiddenWord = [];
let testedLetters = [];
let wrongLetters = [];


if(randomWord === 0) {
    words = ["rainbow", "dismiss", "attract", "explain", "enhance", "dismiss",
             "bench", "angel", "swing", "bear", "flag", "book", "flower", "moon",
             "sun", "school", "teacher"];
    
    randomNumber = Math.floor(Math.random()* words.length);

    randomWord = words[randomNumber];

};

htmlLetterInput.addEventListener("keyup",includes, false)
htmlLetterInput.addEventListener("keyup", checkLetter, false);
htmlLetterInput.addEventListener("keyup", triesLeft, false);
htmlLetterInput.addEventListener("keyup", wrongLetter, false);
htmlLetterInput.addEventListener("keyup", doubleLetter, true);

for (let i = 0;i<randomWord.length; i++){
    hiddenWord.push("_");
    if(i === randomWord.length-1){
        displayHiddenWord = hiddenWord.join(" ");
        htmlHiddenWord.textContent = displayHiddenWord;
    }
};

console.log(randomWord)
console.log(tries)
console.log(hiddenWord)