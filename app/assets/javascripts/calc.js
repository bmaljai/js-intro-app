
// function add(number) {
//   var currentSum = parseInt(document.getElementById("sum").innerHTML);
//   document.getElementById("sum").innerHTML = currentSum + number;
// }

function add(number){
  var currentTotal = parseInt(document.getElementById("total").innerHTML);
  document.getElementById("total").innerHTML = currentTotal + number;
  console.log(currentTotal);
}

function clearCalc(){
  document.getElementById("total").innerHTML = 0;
  var currentTotal = parseInt(document.getElementById("total").innerHTML);
  console.log(currentTotal);
}

function addRandomInt(){
  var rand = Math.floor(Math.random() * 10);
  console.log(rand);
  var currentTotal = parseInt(document.getElementById("total").innerHTML);
  document.getElementById("total").innerHTML = rand + currentTotal;
}