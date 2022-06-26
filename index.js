var nameTag = document.getElementById("name");
var text = "Vansh's GYM ";
var i = 0;

function autotype() {
  if (i < text.length) {
    nameTag.innerHTML += text.charAt(i);
    i++;
  } else {
    nameTag.innerHTML = "";
    i=0;
  }
}

setInterval(autotype, 300);
// document.getElementById("remove").innerHTML = "";
