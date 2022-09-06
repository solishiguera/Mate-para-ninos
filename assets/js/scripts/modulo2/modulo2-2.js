var i = 0;
var i = 0;
var j = 0;
var txt =
  "Los números decimales se escriben usando un punto para separar la parte entera de la parte decimal. Lo más común es encontrarlos usando el punto, pero se puede escribir usando una coma o apóstrofe.";
var txt2 = "1.7  -  1,7  -  1'07";
var speed = 50;
function typeMyText() {
  if (i < txt.length) {
    document.getElementById("type-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeMyText, speed);
  }
  if (j < txt2.length && i >= txt.length) {
    document.getElementById("type-text-ex").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeMyText, speed);
  }
}


function checkPic() { 
  var checkbox = document.getElementById('toggle');
  var fold = document.getElementById('fold-fotito');
  var fotito = document.getElementById('fotito')
  if (!checkbox.checked) { 
    if (fotito.style.display === "none") {
      fotito.style.display = "block";
      fotito.style.height = "100%";
      fold.style.height = '500px';
      fold.style.margin = 'auto';
    }
    console.log('checked!')
  } else { 
    fotito.style.display = "none";
    fold.style.width = '100%'
    fold.style.height = 'auto'
  }
}