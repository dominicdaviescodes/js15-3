function getTime(){
  var x = new Date()
  document.getElementById('clock').innerHTML = x.toLocaleTimeString();
}

function getDays(){
  var y = new Date();
  var day1 = y.getDate();
  var day2 = 31;
  var difference = day2 - day1;
  document.getElementById('days').innerHTML= difference + ' ' + 'days left';
  if (difference < 0) {
    document.getElementById('container').style.display = 'none';
  } else if (difference === 0) {
    document.getElementById('days').innerHTML = 'Ends today';
  }
}
setInterval(getTime,1000)
setTimeout(getTime,0)
getDays();