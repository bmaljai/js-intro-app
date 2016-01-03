
var boxNumberClicked = [];
function clickOne(boxNumber) {
  if (boxNumberClicked.indexOf(boxNumber) === -1){
    boxNumberClicked.push(boxNumber);
  } else {
    console.log("box already clicked")
  }
  console.log(boxNumberClicked)
  checkIfWinner();
}


function checkIfWinner() {
  if(boxNumberClicked.length ===3) {
    alert("You win!!");
  }
}