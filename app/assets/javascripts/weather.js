function changeWeather(box, color) {
  document.body.style.background = color;
  document.getElementById("current-time").innerHTML = box.innerHTML;
}