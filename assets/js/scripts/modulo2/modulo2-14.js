function isAnswer(curr, correct) { 
  if(curr == correct) {
    document.getElementById(correct).style.backgroundColor = '#dcecd8'
  } else {
    document.getElementById(curr).style.backgroundColor = '#fbdfde'
  }
  
  document.getElementById(curr).classList.add("answered");
}

function resetColors() { 
  var btns = document.getElementsByClassName('cool-btn')
  for(let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = '#cd764d'
    btns[i].classList.remove("answered")
  }
}