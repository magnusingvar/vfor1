// 1.


function getHtmlID(id){
    return document.getElementById(id);
}


// 2.


function printToHtml(id,string){
    id.textContent = string;
}


// 3.


printToHtml(getHtmlID("strengur"), "javascript text")

function printToHtmlTwo(id, string){
    htmlTag = getHtmlID(id);
    htmlTag.textContent = string
}

printToHtmlTwo("strengur", "javascript text 2")