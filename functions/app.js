function currentTimeToDisplay(){
  var currentTime = new Date()
  document.write(currentTime)
}

// currentTimeToDisplay();


function tringle(number){
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(j);
    }
    document.write("<br/>");
  }
}

tringle(5)