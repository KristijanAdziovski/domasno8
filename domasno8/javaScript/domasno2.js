$(document).ready(function(){
let inputOne=$("input").first().val();
console.log(inputOne);
let inputTwo=$("input").last().val();
console.log(inputTwo);
let header = $("h3");
console.log(header.text());
header.text(header.text()+" Dodavanje na tekst");
console.log(header.text());
let myDiv=$("#myDiv");
myDiv.html(myDiv.html()+"<div><p>Dodadeno div i paragraph</p></div>");
console.log(myDiv.html());
});