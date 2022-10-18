$(document).ready(function() {
  $("#basicform").validate();
});

$("#basicform").submit(function(e) {
  e.preventDefault();
});

var labelNames = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8']
var labelAnsw = ['12 3', '20 5', '1', '2', '8 2', '4 1', '2', '9']

function correct() { 
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    var myValue = document.getElementById(currElement).value

    console.log('-- -- -- -- --')
    console.log(labelAnsw[i])
    console.log(labelNames[i])
    console.log(myValue)
    if(myValue == "" || !labelAnsw[i].includes(myValue)) {
      document.getElementById(currElement).style.backgroundColor = '#fbdfde'
      document.getElementById(currElement).style.color = 'red'
    } else { 
      document.getElementById(currElement).style.backgroundColor = '#dcecd8'
      document.getElementById(currElement).style.color = 'green'
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", correct, false);