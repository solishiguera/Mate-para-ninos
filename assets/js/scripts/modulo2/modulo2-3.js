var fourSevenArr = [
  "Cuarenta y siete",
  "Cuarenta y siete",
  "Cuarenta y siete unidades",
  "Cuatro decenas y siete unidades",
];
var dotArtt = ["punto", "con", "y", "con"];
var sixTwoArr = [
  "sesenta y dos",
  "sesenta y dos",
  "sesenta y dos centésimas",
  "seis décimas y dos centésimas",
];

function lecturaDecimal(i) {
  var fourSeven = document.getElementById("1-1");
  var dot = document.getElementById("2-2");
  var sixTwo = document.getElementById("3-3");

  fourSeven.innerHTML = fourSevenArr[i];
  dot.innerHTML = dotArtt[i];
  sixTwo.innerHTML = sixTwoArr[i];
}

function changeColor(num, word) { 
  var number = document.getElementById(num)
  var myWord = document.getElementById(word)

  number.style.color ='#008080'
  myWord.style.color = '#008080'
}

function backColor(num, word) {
  var number = document.getElementById(num)
  var myWord = document.getElementById(word)

  number.style.color ='white'
  myWord.style.color = 'black'
}