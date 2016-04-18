// function changeWeather(box, color) {
//   document.body.style.background = color;
//   document.getElementById("current-time").innerHTML = box.innerHTML;
// }

function setWeather(box, color){
  document.getElementById("current-time").style.background = color;
  document.getElementById("current-time").innerHTML = box.innerHTML;
}