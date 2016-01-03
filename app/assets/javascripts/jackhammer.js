var numberOfClicks = 0;
function jackhammer() {
  numberOfClicks++;
  if (numberOfClicks === 5) {
    alert("You win!!!")
  }
}

function colorChange(box) {
  var color = getRandomColor();
  box.style["background"] = color;
  jackhammer();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}
