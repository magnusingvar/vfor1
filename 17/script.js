let list = document.getElementsByTagName("ul")[0];
let newItemLast = document.createElement("li");
let newTextLast = document.createTextNode("cream");

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

let newItemFirst = document.createElement("li");
let newTextFirst = document.createTextNode("kale");
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild)

let listItems = document.getElementsByTagName("li");
let i;

for(i=0;i<listItems.length; i++){
    listItems[i].className = "cool";
}

let heading = document.getElementsByTagName("h2")[0];
let headingText = heading.textContent;
let totalItems = listItems.length;
let newHeading = headingText + '<span>' + totalItems + '</span>';

heading.innerHTML = newHeading;