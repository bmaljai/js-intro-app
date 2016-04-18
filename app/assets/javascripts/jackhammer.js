// var numberOfClicks = 0;
// function jackhammer() {
//   numberOfClicks++;
//   if (numberOfClicks === 5) {
//     alert("You win!!!")
//   }
// }

// function colorChange(box) {
//   var color = getRandomColor();
//   box.style["background"] = color;
//   jackhammer();
// }

// function getRandomColor() {
//   var letters = '0123456789ABCDEF'.split('');
//   var color = '#'
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)]
//   }
//   return color;
// }

var winFlag = false;
var jackCount = 0;
function jackhammer(box){
  if (!winFlag){
    changeColor(box);
    jackCount++;
    console.log(jackCount);
    winCheck();
  }
  else {
    alert("stop playing, you won.");
  } 

}

function winCheck(){
  if (jackCount === 10){
    alert("You Win");
    winFlag = true;
  }
}

function changeColor(box){
  box.style["background"] = getRandomColor();
}

function getRandomColor(){
  var randomSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var color = "#";
  for (i=0; i<6; i++){
    color += randomSet[randomIndex()];
  }
  return color;
}

function randomIndex(){
  return Math.floor(Math.random() * 16);
}