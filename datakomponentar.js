var i = 0;
var txt = 'Data komponentar'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("maintitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


setTimeout(() => {
    typeWriter()
}, 1000); 

