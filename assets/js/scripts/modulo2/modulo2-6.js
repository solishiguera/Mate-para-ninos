$(document).ready(function () {
  $("#basicform").validate();
});

$("#basicform").submit(function (e) {
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
  "row26",
];
var labelAnsw = [
  "589",
  "213",
  "5",
  "8",
  "9",
  "2",
  "1",
  "3",
  "712.98",
  "7",
  "1",
  "2",
  "9",
  "8",
  "0",
  "92",
  "182",
  "0",
  "9",
  "2",
  "1",
  "8",
  "2",
  "451.362",
  "451",
  "362",
];

function correct() {
  for (let i = 0; i < labelNames.length; i++) {
    var currElement = labelNames[i];
    var myValue = document.getElementById(currElement).value;
    if (myValue == "" || !myValue.includes(labelAnsw[i])) {
      document.getElementById(currElement).style.backgroundColor = "#fbdfde";
      document.getElementById(currElement).style.color = "red";
    } else {
      console.log(document.getElementsByClassName(currElement));
      document.getElementById(currElement).style.backgroundColor = "#dcecd8";
      document.getElementById(currElement).style.color = "green";
    }
  }
}

document.getElementById("submitBtn").addEventListener("click", correct, false);

/** PARTE DOS */
window.onload = function () {
  var questionArea = document.getElementsByClassName("questions")[0],
    answerArea = document.getElementsByClassName("answers")[0],
    checker = document.getElementsByClassName("checker")[0],
    current = 0,
    allQuestions = {
      "1.25 + 2.31" : [
        "3.45", 
        "4.72", 
        "3.56", 
        2],

      "3.45 + 2.13" : [
        "6.42", 
        "5.58", 
        "5.39", 
        1],

      "7.112 + 1.476" : [
        "8.349", 
        "8.588", 
        "8.906", 
        1]
      
    };

  function loadQuestion(curr) {
    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = "";
    questionArea.innerHTML = question;
  }

  function loadAnswers(curr) {
    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = "";

    for (var i = 0; i < answers.length - 1; i += 1) {
      var createDiv = document.createElement("div"),
        text = document.createTextNode(answers[i]);

      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));

      answerArea.appendChild(createDiv);
    }
  }

  function checkAnswer(i, arr) {
    
    return function () {
      var givenAnswer = i,
        correctAnswer = arr[arr.length - 1];

      if (givenAnswer === correctAnswer) {
        addChecker(true);
      } else {
        addChecker(false);
      }

      if (current < Object.keys(allQuestions).length - 1) {
        current += 1;

        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = "¡Listo!";
        answerArea.innerHTML = "";
      }
    };
  }

  function addChecker(bool) {
    var createDiv = document.createElement("div"),
      txt = document.createTextNode(current + 1);

    createDiv.appendChild(txt);

    if (bool) {
      createDiv.className += "correct";
      checker.appendChild(createDiv);
    } else {
      createDiv.className += "false";
      checker.appendChild(createDiv);
    }
  }

  loadQuestion(current);
  loadAnswers(current);
};


function tryAgain() { 
  var questionArea = document.getElementsByClassName("questions")[0],
    answerArea = document.getElementsByClassName("answers")[0],
    checker = document.getElementsByClassName("checker")[0],
    current = 0,
    allQuestions = {
      "1.25 + 2.31" : [
        "3.45", 
        "4.72", 
        "3.56", 
        2],

      "3.45 + 2.13" : [
        "6.42", 
        "5.58", 
        "5.39", 
        1],

      "7.112 + 1.476" : [
        "8.349", 
        "8.588", 
        "8.906", 
        1]}
        
  loadQuestion(current);
  loadAnswers(current);
}
