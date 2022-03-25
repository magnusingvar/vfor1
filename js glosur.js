// let => ef breytan breytist
// const => ef breytan breytist ekki eftir skilgreiningu

function outputString() {
	// Skilar úr streng
	return 'haha';
}

function outputVariable(siggi) {
	let output = siggi; // Setjum innihald hérna
	let kalli = siggi; // Setjum líka innihaldið hérna
	return output;
}

function sumTwoNumbers(numberOne, numberTwo) {
	// Leggur saman tölu í breytunni numberOne við töluna
	// í numberTwo og skilar útkomunni.
	let sm = numberOne + numberTwo;
	return sm;
}

function printStudentNameBySex(sex) {
	if (sex === 'kvk') {
		return 'Guðbjörg';
	} else {
		return 'Þetta eru of mörg nöfn';
	}
}

let ans = 0;
ans = sumTwoNumbers(2, 3);
document.getElementByID('ans').textContent = ans;

// let => ef breytan breytist
// const =>ef breytan breytist ekki eftir skilgreiningu

// Breytur

// const foo = Breytistaldrei;
// let bar = breytist

// const foobar = document.getElementById("ans");
// foobar.textContent = "pabbi"

// foobar = document.getElementById("mamma")  // virkar ekki.
// foobar.textContent = "mamma"  // virkar ekki.

let foo = "";
foo = "mamma"
// bætum við foo breytuna
foo += " og pabbi"
// tekur yfir breytuna.
foo = " og börnin"

let bar = 0;
bar += 1;

foo = 10;
let foobar = foo + bar;

// Javascript const alphabet
// Python ALPHABET


// boolean er True eða False, 1 eða 0
// if setningar
// !foo merkir að foo er / False / Öfugt / Ekkert

// Dæmi 1
let foo = 10;

if(foo / 5 == 2){
	foo = 10
	foobar2 = "inní IF setningunni"
}else{
	foo = 20
	foobar2 = "fór inní else"
}

// Dæmi 2
let foo = 5;

if(foo + 4 == 5){
	foobar2 = "inní IF setningunni"
}else{
	foobar2 = "fór inní else"
}


// for loop keyrir sama koðann x oft
// fyrsta gildið segir hvar við byrjum að telja
// annað gildið segir að við teljum meðan þetta er TRUE
// þriðja gildið segir hvað gerist við i í hvert skipti
// sem kóðinn keyrir sig í gegn.
for(let i = 0;i <=10;i++){
	foo += i;
}


// Tekur allt úr HTML skjalinu sem er með id ans og
// setur inní breytuna foobar.
const foobar = document.getElementById("ans");
// textContent er aðgerð sem breytir textanum í HTML
// breytunni foobar.
foobar.textContent = bar;
