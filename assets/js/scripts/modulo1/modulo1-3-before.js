$(document).ready(function() {
  $("#basicform").validate();
});

$("#basicform").submit(function(e) {
  e.preventDefault();
});

var labelNames = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']
var labelAnsw = ['+15', '-2', '+2', '+3', '+7', '-9']

function correct() { 
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    var myValue = document.getElementById(currElement).value
    myValue = myValue.replace(/\s/g, '');
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