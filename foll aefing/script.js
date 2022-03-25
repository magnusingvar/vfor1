// eitt fall sem margfaldar
function mult(num1, num2) {
	return num1 * num2;
}

ans1 = mult(2, 3);
document.getElementById('ans1').textContent = ans1;

// eitt fall sem skilar frá sér fornafni og eftirnafni
function concatFullName(FName, LName) {
	return FName + " " + LName;
}

ans2 = concatFullName();
document.getElementById('ans2').textContent = ans2;

// athugar aldur skilar 5 mögulegum svörum
function ageRemarks(age) {
    if(age <= 20){
        return "still baby";
    }else if(age > 20 && age < 31){
        return "finally growing up";
    }else if(age > 30 && age < 41){
        return "prime age"
    }else if(age > 40 && age < 51){
        return "getting old man"
    }else{
        return "you dead man, just give up"
    }
}

ans3 = ageRemarks(age);
document.getElementById('ans3').textContent = ans3;
