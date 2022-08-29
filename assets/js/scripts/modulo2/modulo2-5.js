$(document).ready(function() {
  $("#basicform").validate();
});

var labelNames = ['p1', 'p2', 'p3', 'p3-1', 'p3-2','p3-3','p3-4', 'p4-4','p4','p4-1','p4-2','p4-3',]
var labelAnsw = ['p1', 'p4', 'p3', 'p3-1', 'p3-2','p3-3','p3-4', 'p4-4','p4','p4-1','p4-2','p4-3',]

function correct() { 
  if(document.basicform.p1.value == "" ||  document.basicform.currElement.value != labelAnsw[i]) {
    document.getElementById(p1).style.backgroundColor = 'red'
  } else { 
    document.getElementById(p1).style.backgroundColor = 'green'
  }  
  /**
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    console.log(currElement)
    console.log(document.basicform.currElement.value)
    if(document.basicform.currElement.value == "" ||  document.basicform.currElement.value != labelAnsw[i]) {
      document.getElementById(currElement).style.backgroundColor = 'red'
    } else { 
      document.getElementById(currElement).style.backgroundColor = 'green'
    }
  } */
}