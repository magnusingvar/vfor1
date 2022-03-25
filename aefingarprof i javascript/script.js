ans = document.getElementById("ans")
const school = "FB";
let teacherName = "Hjorvar";
let teacherAge = 39;
let studentName = "Siggi";
let studentAge = 18;

function getId(id){
    return document.getElementById(id);
}


function ageDifference(teacherAge,studentAge){
    let difference = teacherAge - studentAge
    return difference
}

getId(ageDifference("ans"))

function returnName(name){
    return name
}

function returnNameAndAge(name, age){
    return name
    return age
}

getId(returnName("ans",name))

