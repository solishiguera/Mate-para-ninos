$(document).ready(function() {
  $("#basicform").validate();
});

$("#basicform").submit(function(e) {
  e.preventDefault();
});

var labelNames = [
  "row1",
  "row2",
  "row3",
  "row4",
  "row5",
  "row6",
  "row7",
  "row8",
  "row9",
  "row10",
  "row11",
  "row12",
  "row13",
  "row14",
  "row15",
  "row16",
  "row17",
  "row18",
  "row19",
  "row20",
  "row21",
  "row22",
  "row23",
  "row24",
  "row25",
  "row26"
];
var labelAnsw = [
  '589', '213', '5', '8','9','2','1','3',
  '712.98', '7', '1', '2', '9','8','0',
  '92', '182', '0', '9', '2', '1', '8', '2',
  '451.362', '451', '362'
 ]

function correct() { 
  for(let i = 0; i < labelNames.length; i++) { 
    var currElement = labelNames[i]
    var myValue = document.getElementById(currElement).value
    if(myValue == "" ||  !myValue.includes(labelAnsw[i])) {
      document.getElementById(currElement).style.backgroundColor = '#fbdfde'
      document.getElementById(currElement).style.color = 'red'
    } else { 
      console.log(document.getElementsByClassName(currElement))
      document.getElementById(currElement).style.backgroundColor = '#dcecd8'
      document.getElementById(currElement).style.color = 'green'
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", correct, false);