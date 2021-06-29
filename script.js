document.querySelector(".On_button").onclick = function changeContent() {

   document.querySelector(".bulbImage").src = "images/on.png";
   document.querySelector(".topSection").style = "background-color: #F9E3A2";

}

document.querySelector(".Off_button").onclick = function changeContent() {

   document.querySelector(".bulbImage").src = "images/off.png";
   document.querySelector(".topSection").style = "background-color: #343A40";

}
