/*
  Aufgabe 4
  Gib "Hello World" in der Konsole aus.
  Wir werden dir zeigen, wie du in die Konsole gelangst.
*/
console.log("Hello World");



/*
  Aufgabe 5
  Überschreibe mit hilfe von JavaScript die Überschrift aus Aufgabe 1 mit "Meine Oberstiften sind so cool!"
*/
function changeHeadline() {
  var headline = document.querySelector("h1");
  headline.innerText = "Meine Oberstiften sind so cool!";
}

changeHeadline();



/*
  Aufgabe 6
  Schreibe eine Funktion, die in dem div mit der id = myBox, "Hello World" ausgibt.
*/
function changeHello() {
  var divElement = document.getElementById("myBox");
  divElement.innerText = "Hello World";
}

changeHello();



/*
  Aufgabe 7
  Schreibe eine Funktion, die überprüft ob der Button mit der id = myButton geklickt wird oder nicht. 
  Wenn dieser geklickt wird, soll eine Zahl aufsteigen. 
  Für jeden klick + 1.
*/
var button = document.getElementById("myButton");
var counter = 0;
button.addEventListener("click", function () {
  counter++;
  button.innerHTML = "Klick mich " + counter;
});
