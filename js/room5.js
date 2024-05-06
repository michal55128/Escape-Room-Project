// Get the table element
const chessTable = document.getElementById("chess");

// Get all the table rows
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const cells1 = row1.getElementsByTagName("td");
const cells2 = row2.getElementsByTagName("td");
const cells3 = row3.getElementsByTagName("td");

let a = [];
function check(i) {
  let index = i;
  a.push(index);
  for (let j = 1; j <= a.length; j++) {
    console.log(a[j - 1], j, a.length)
    if (a[j - 1] != j && a[j - 1] != 1) {
      paint();
      a.splice(0, a.length);
      let audio = new Audio('../צלילים/fail.wav');
      audio.play();
    }
    else {
      let audio = new Audio('../צלילים/button.ogg');
      audio.play();
    }
    if (a[j - 1] == 1 && a[j] == 1)
      a.splice(1, a.length);
    if (a.length == 4 && j == 4) {
      if (localStorage.getItem("level") < 5)
        localStorage.setItem("level", 5);
        document.body.style.backgroundImage = "url('')";
        document.getElementById("pieces").style.display = "none";
        document.getElementById("chess").style.display = "none";
        document.getElementById("door").style.display = "inline";
        document.getElementById("arrow").style.display = "inline";
        document.body.style.justifyItems = 'center';
        let audio = new Audio('../צלילים/open.wav');
        audio.play();  
      let o=document.getElementById("arrow").addEventListener("click",function(){   
        window.location.href = "../html/index.html";
      })
  }
}
function paint() {
  for (let j = 0; j < cells1.length - 1; j++) {
    cells1[j].style.backgroundColor = "#830000";
  }

  setTimeout(() => {
    for (let j = 0; j < cells1.length - 1; j++) {
      cells1[j].style.backgroundColor = "white";
    }
    cells1[0].style.backgroundColor = "#830000";
    cells2[0].style.backgroundColor = "#830000";
    cells3[0].style.backgroundColor = "#830000";


  }, 450);
  setTimeout(() => {
    cells1[0].style.backgroundColor = "white";
    cells2[0].style.backgroundColor = "white";
    cells3[0].style.backgroundColor = "white";
    cells1[2].style.backgroundColor = "#830000";
    cells2[1].style.backgroundColor = "#830000";
    cells3[0].style.backgroundColor = "#830000";

  }, 900);

  setTimeout(() => {
    cells1[2].style.backgroundColor = "white";
    cells2[1].style.backgroundColor = "white";
    cells3[0].style.backgroundColor = "white";
    cells1[1].style.backgroundColor = "#830000";
    cells2[1].style.backgroundColor = "#830000";
    cells3[1].style.backgroundColor = "#830000";
    cells1[2].style.backgroundColor = "#830000";


  }, 1350);

  setTimeout(() => {
    // Set the bottom 3 squares to white
    cells1[1].style.backgroundColor = "white";
    cells2[1].style.backgroundColor = "white";
    cells3[1].style.backgroundColor = "white";
    cells1[2].style.backgroundColor = "white";

  }, 1800);

}
// You can adjust the time delay or direction of movement according to your needs
const movingImage = document.getElementById("hand");
hand.style.animationDirection = "alternate";
hand.style.animationTimingFunction = "ease-in-out";
hand.style.animationDelay = "0s";
hand.style.animationDuration = "4s";
}
