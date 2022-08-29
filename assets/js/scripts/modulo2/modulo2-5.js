$(document).ready(function() {
  $("#basicform").validate();
});

$("#basicform").submit(function(e) {
  e.preventDefault();
});

var labelNames = ['p1', 'p2', 'p3', 'p3-1', 'p3-2','p3-3','p3-4', 'p4-4','p4','p4-1','p4-2','p4-3',]
var labelAnsw = ['54.858', '923.87', '7', '8', '7','3','9', '2','9','7','8','3']

function correct() { 
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    var myValue = document.getElementById(currElement).value
    if(myValue == "" ||  !myValue.includes(labelAnsw[i])) {
      document.getElementById(currElement).style.backgroundColor = '#fbdfde'
      document.getElementById(currElement).style.color = 'red'
    } else { 
      document.getElementById(currElement).style.backgroundColor = '#dcecd8'
      document.getElementById(currElement).style.color = 'green'
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", correct, false);