$(document).ready(function() {
  $(".basicform").validate();
});

$(".basicform").submit(function(e) {
  e.preventDefault();
});

var labelNames = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13','p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20']
var labelAnsw = ['+15', '-2', '+2', '+3', '+7', '-9', '64', '256', '1024', '36', '18', '9', 'restar15', '40', '25', '10', 'sumar8', '17', '25', '33']

function correct() { 
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    var myValue = document.getElementById(currElement).value
    myValue = myValue.replace(/\s/g, '');
    myValue = myValue.toString().toLowerCase();
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