function isAnswer(curr, correct) { 
  if(curr == correct) {
    document.getElementById(correct).style.backgroundColor = 'green'
  } else {
    document.getElementById(curr).style.backgroundColor = 'red'
  }
}

function resetColors() { 
  var btns = document.getElementsByClassName('cool-btn')
  for(let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = '#93bed8'
  }
}