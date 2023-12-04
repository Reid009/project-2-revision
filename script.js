

var question = prompt("What's your favorite color?")
alert("Your favorite color is " + question);

var getName = prompt("What's your name?")
alert("Your name is" + getName);

var newHeading = document.createElement("h1");
document.body.insertBefore(newHeading, new_child);
newHeading.innerHTML = "Reid's Revised Site"

var color_change = document.createElement("h2")
document.body.insertBefore(color_change, new_child);
color_change.innerHTML = "Your favorite color is " + question

var new_child = document.getElementById("back");
document.body.appendChild(new_child);

var writeName = document.createElement("h2");
document.body.insertBefore(writeName, new_child);
writeName.innerHTML = "Your name is " + getName;

var button = document.getElementById("button");
button.onclick(changeBackground());
function changeBackground(element){
  document.body.style.backgroundColor = "red";
}

var bluebutton = document.getElementById("bluebutton");
bluebutton.onclick(changeBackgroundBlue());
function changeBackgroundBlue(element){
  document.body.style.backgroundColor = "blue";
}

var newParagraph = document.createElement("p");
document.body.insertBefore(newParagraph, new_child);
newParagraph.innerHTML = "hi";

var anotherParagraph = document.createElement("p");
document.body.insertBefore(anotherParagraph, new_child);
anotherParagraph.innerHTML = "JavaScript is annoying";
