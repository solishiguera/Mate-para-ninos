$(document).ready(function () {
  $("#basicform").validate();
});

$("#basicform").submit(function (e) {
  e.preventDefault();
});

$(document).ready(function () {
  $("#basicform2").validate();
});

$("#basicform2").submit(function (e) {
  e.preventDefault();
});

var labelNames = [
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
];

var labelAnsw = [
  "12 3",
  "20 5",
  "1",
  "2",
  "8 2",
  "4 1",
  "2",
  "9",
  "2 1",
  "2",
  "2",
  "1",
  "1",
  "2",
  "6",
  "1",
  "3",
  "4",
  "4",
  "1",
  "1",
  "4",
  "8",
  "2",
  "4",
  "1",
  "2",
  "4",
  "5",
  "2",
  "3",
];

function correct() {
  for (let i = 0; i < 9; i++) {
    var currElement = labelNames[i];
    var myValue = document.getElementById(currElement).value;
    
    if (myValue == "" || !labelAnsw[i].includes(myValue)) {
      document.getElementById(currElement).style.backgroundColor = "#fbdfde";
      document.getElementById(currElement).style.color = "red";
    } else {
      document.getElementById(currElement).style.backgroundColor = "#dcecd8";
      document.getElementById(currElement).style.color = "green";
    }
  }
}

function correct2() {
  for (let i = 8; i < 33; i++) {
    var currElement = labelNames[i];
    console.log(currElement);
    if (currElement == '12' || currElement == '20') { continue; }
    var myValue = document.getElementById(currElement).value;

    console.log("-- -- -- -- --");
    console.log(labelAnsw[i]);
    console.log(labelNames[i]);
    console.log(myValue);
    if (myValue == "" || !labelAnsw[i+1].includes(myValue)) {
      document.getElementById(currElement).style.backgroundColor = "#fbdfde";
      document.getElementById(currElement).style.color = "red";
    } else {
      document.getElementById(currElement).style.backgroundColor = "#dcecd8";
      document.getElementById(currElement).style.color = "green";
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", correct, false);
document.getElementById("submitBtn2").addEventListener("click", correct2, false);
