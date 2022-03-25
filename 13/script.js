let greeting        = "Howdy ";
let name            = "Molly";
let message         = ", please check your order:";
let welcome         = greeting + name + message;

let sign            = "Montague House"; // => 14
let tiles           = sign.length; // lengdin á sign
let subTotal        = tiles * 5;
let shipping        = 7;
let grandTotal      = subTotal + shipping;

let el              = document.getElementById("greeting");
let elSign          = document.getElementById("userSign");
let elTiles         = document.getElementById("tiles");
let elSubTotal      = document.getElementById("subTotal");
let elShipping      = document.getElementById("shipping");
let elGrandTotal    = document.getElementById("grandTotal");

el.textContent              = welcome;
elSign.textContent          = sign;
elTiles.textContent         = tiles;
elSubTotal.textContent      = "$" + subTotal;
elShipping.textContent      = "$" + shipping;
elGrandTotal.textContent    = "$" + grandTotal;