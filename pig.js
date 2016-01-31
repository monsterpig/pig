var q = document.getElementById("question");
q.innerText = "what is 6+1 ?";
var a = document.getElementById("answer");
a.onchange = function() {
  if (a.value === "7") {
    var audio = new Audio("http://cdl7.convert2mp3.net/download.php?id=youtube_agDFl3A8_ws&key=0t55BVVisonA&d=y");
    audio.play();
  }
}
